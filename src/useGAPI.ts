import { useRef, useCallback, useEffect, useState } from "react";

import generateDates from "./generateDates";

const config = {
  clientId:
    "572657086268-6j3glrvtb5f0li11labiaq20940q0ql3.apps.googleusercontent.com",
  apiKey: "AIzaSyDCuVHCgYTvOv5feK23iP7Vpqk6yjDfOvI",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const CALENDAR_NAME = "Tabex";

function useGAPI() {
  const calendarId = useRef("");
  const [user, setUser] = useState({ isSignedIn: false, name: "", avatar: "" });
  const [events, setEvetns] = useState<gapi.client.calendar.Event[]>([]);

  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);

    script.onload = () => {
      gapi.load("client:auth2", async () => {
        await gapi.client.init(config);

        const auth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        auth.isSignedIn.listen((isSignedIn) => {
          if (isSignedIn) {
            const profile = auth.currentUser.get().getBasicProfile();

            setUser({
              isSignedIn,
              name: profile.getName(),
              avatar: profile.getImageUrl(),
            });
          } else {
            setUser({
              isSignedIn,
              name: "",
              avatar: "",
            });
            setEvetns([]);
          }
        });

        if (!auth.isSignedIn.get()) return;

        const profile = auth.currentUser.get().getBasicProfile();

        setUser({
          isSignedIn: auth.isSignedIn.get(),
          name: profile.getName(),
          avatar: profile.getImageUrl(),
        });
      });
    };
  }, []);

  const signIn = useCallback(
    () => void gapi.auth2.getAuthInstance().signIn(),
    []
  );

  const signOut = useCallback(
    () => void gapi.auth2.getAuthInstance().signOut(),
    []
  );

  const createEvents = useCallback(async (date: Date) => {
    setShowProgress(true);

    const calendarResponse = await gapi.client.calendar.calendars.insert({
      summary: CALENDAR_NAME,
    });

    calendarId.current = calendarResponse.result.id;

    // @ts-ignore
    const batch = gapi.client.newBatch();
    const dates = generateDates(date);

    dates.forEach((dateTime) => {
      const event = gapi.client.calendar.events.insert({
        calendarId: calendarResponse.result.id,
        resource: {
          summary: `🕒 - Tabex 💊`,
          start: { dateTime },
          end: { dateTime },
          reminders: {
            useDefault: false,
            overrides: [{ method: "popup", minutes: 0 }],
          },
        },
      });

      batch.add(event);
    });

    await batch;

    const eventsResponse = await gapi.client.calendar.events.list({
      calendarId: calendarResponse.result.id,
      orderBy: "startTime",
      singleEvents: true,
    });

    setShowProgress(false);
    setEvetns(eventsResponse.result.items);
  }, []);

  const completeEvent = useCallback(async (id: string) => {
    // @ts-ignore
    const { result } = await gapi.client.calendar.events.patch({
      calendarId: calendarId.current,
      eventId: id,
      summary: `✅ - Tabex 💊`,
    });

    setEvetns((events) => {
      return events.map((event) => (event.id !== result.id ? event : result));
    });
  }, []);

  useEffect(() => {
    if (!user.isSignedIn) return;

    async function getData() {
      setShowProgress(true);

      // Get calendar if exists
      const calendarsResponse = await gapi.client.calendar.calendarList.list();
      const calendar = calendarsResponse.result.items.find(
        (item) => item.summary === CALENDAR_NAME
      );

      if (calendar?.id) {
        calendarId.current = calendar.id;

        const eventsResponse = await gapi.client.calendar.events.list({
          calendarId: calendar.id,
          orderBy: "startTime",
          singleEvents: true,
        });

        setEvetns(eventsResponse.result.items);
      }

      setShowProgress(false);
    }

    getData();
  }, [user.isSignedIn]);

  return {
    user: { ...user, signIn, signOut },
    events,
    showProgress,
    createEvents,
    completeEvent,
  };
}

export default useGAPI;

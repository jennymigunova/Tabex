import type { FC } from "react";

import { useState, useMemo } from "react";
import { groupBy } from "remeda";
import { set, format, isSameDay } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";

import Event from "./Event";

interface Props {
  events: gapi.client.calendar.Event[];
  completeEvent: (id: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.primary.main}`,
  },
  indicator: {
    backgroundColor: theme.palette.grey[50],
  },
  tab: {
    width: "100px",
  },
  tabPanel: {
    width: "calc(100% - 100px)",
  },
}));

const Events: FC<Props> = ({ events, completeEvent }) => {
  const classes = useStyles();

  const tabs = useMemo(() => {
    const groups = groupBy(events, (event) => {
      // @ts-ignore
      return set(new Date(event.start.dateTime), {
        hours: 0,
        minutes: 0,
      }).toISOString();
    });

    return Object.entries(groups);
  }, [events]);

  const [tab, setTab] = useState(
    tabs.findIndex((tab) => {
      const currentDate = set(new Date(Date.now()), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      return isSameDay(new Date(tab[0]), currentDate);
    }) || 0
  );

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
        orientation="vertical"
        variant="scrollable"
        scrollButtons="off"
        indicatorColor="secondary"
        value={tab}
        onChange={(event, value) => void setTab(value)}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab[0]}
              className={classes.tab}
              label={format(new Date(tab[0]), "MMM d")}
            />
          );
        })}
      </Tabs>
      <List className={classes.tabPanel}>
        {tabs[tab][1].map((event) => {
          return (
            <Event key={event.id} event={event} completeEvent={completeEvent} />
          );
        })}
      </List>
    </div>
  );
};

export default Events;

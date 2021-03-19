import type { FC } from "react";

import { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import useGAPI from "./useGAPI";
import AppToolbar from "./AppToolbar";
import DatePicker from "./DatePicker";
import Events from "./Events";

type SCREEN = "DATE_PICKER" | "LIST" | "NONE";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  content: {
    height: "calc(100vh - 56px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff",
  },
  snack: {
    backgroundColor: "#000000 !important",
  },
}));

const App: FC = () => {
  const classes = useStyles();

  const { user, events, showProgress, createEvents, completeEvent } = useGAPI();

  const [screen, setScreen] = useState<SCREEN>("NONE");

  useEffect(() => {
    if (!user.isSignedIn || showProgress) return setScreen("NONE");
    if (events.length === 0) return setScreen("DATE_PICKER");
    if (events.length !== 0) return setScreen("LIST");
  }, [user.isSignedIn, events, showProgress]);

  return (
    <ThemeProvider theme={theme}>
      <Backdrop className={classes.progress} open={showProgress}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppToolbar {...user} />
      <SnackbarProvider
        classes={{
          variantSuccess: classes.snack,
          variantError: classes.snack,
          variantWarning: classes.snack,
          variantInfo: classes.snack,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        maxSnack={3}
      >
        <div className={classes.content}>
          {screen === "DATE_PICKER" && <DatePicker onSelect={createEvents} />}
          {screen === "LIST" && (
            <Events events={events} completeEvent={completeEvent} />
          )}
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;

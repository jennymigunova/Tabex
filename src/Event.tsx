import type { FC } from "react";

import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
  event: gapi.client.calendar.Event;
  completeEvent: (id: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 3),
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    width: "100px",
  },
  tabPanel: {
    width: "calc(100% - 100px)",
  },
}));

const Event: FC<Props> = ({ event, completeEvent }) => {
  const classes = useStyles();

  const isCompleted = event.summary.includes("✅");

  return (
    <ListItem
      className={classes.root}
      button
      disabled={isCompleted}
      onClick={() => void completeEvent(event.id)}
    >
      <ListItemIcon>
        {isCompleted ? <CheckCircleIcon /> : <ScheduleIcon />}
      </ListItemIcon>

      <ListItemText
        primary={format(new Date(event.start.dateTime as string), "p")}
      />
    </ListItem>
  );
};

export default Event;

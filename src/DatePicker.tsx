import type { FC } from "react";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { format, set } from "date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker as MUIDatePicker,
} from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface Props {
  onSelect: (date: Date) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  datePicker: {
    transform: "scale(1.2)",
    transformOrigin: "top",
    marginBottom: 61,
  },
  label: {
    width: "max-content",
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    alignItems: "center",
    gap: 16,
    marginBottom: theme.spacing(2),
  },
  nextButton: {
    width: 150,
  },
}));

const DatePicker: FC<Props> = ({ onSelect }) => {
  const classes = useStyles();

  const [date, setDate] = useState<Date>(new Date(Date.now()));

  return (
    <div className={classes.root}>
      <div className={classes.datePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MUIDatePicker
            disableToolbar
            disablePast
            format="MM/dd/yyyy"
            variant="static"
            openTo="date"
            value={date}
            onChange={(date) => {
              if (date !== null) setDate(date);
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <Typography className={classes.label} variant="h6">
        Starting date:
        <Typography variant="button">{format(date, "PP")}</Typography>
      </Typography>
      <Button
        className={classes.nextButton}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {
          onSelect(set(date, { hours: 0, minutes: 0, seconds: 0 }));
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default DatePicker;

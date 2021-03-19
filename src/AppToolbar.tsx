import type { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface Props {
  isSignedIn: boolean;
  name: string;
  avatar: string;
  signIn: () => void;
  signOut: () => void;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: "auto",
  },
}));

const AppToolbar: FC<Props> = ({
  isSignedIn,
  name,
  avatar,
  signIn,
  signOut,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {isSignedIn && <Avatar className={classes.avatar} src={avatar} />}
        {isSignedIn && <Typography>{name}</Typography>}
        <Button
          className={classes.button}
          color="inherit"
          onClick={() => {
            if (isSignedIn) signOut();
            else signIn();
          }}
        >
          {isSignedIn ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;

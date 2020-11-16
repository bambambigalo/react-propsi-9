import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import AppleIcon from "@material-ui/icons/Apple";
import SettingsIcon from "@material-ui/icons/Settings";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: "inherit"
  },
  link: { textDecoration: "none", color: theme.palette.text.primary }
}));

export default function AppDrawer(props) {
  const { onClose, open } = props;
  const classes = useStyles();
  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose}
        style={{ width: "220px" }}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

              <ListItemText>Главная страница</ListItemText>
            </ListItem>
          </Link>

          <Link to="/account" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>

              <ListItemText>Профиль</ListItemText>
            </ListItem>
          </Link>

          <Link to="/contacts" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>

              <ListItemText>Контакты</ListItemText>
            </ListItem>
          </Link>

          <Link to="/apple" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <AppleIcon />
              </ListItemIcon>

              <ListItemText>Яблоко</ListItemText>
            </ListItem>
          </Link>

          <Link to="/settings" className={classes.link}>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText>Настройки</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}

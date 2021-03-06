import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';
import TagLines from './TagLines'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#212121'
  },
  title: {
    flexGrow: 1,
    color: '#212121'
  },
  appBar: {
    backgroundColor: '#ffffff'
  }
}));

const Header = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
            <Logo /> 
            <TagLines />          
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
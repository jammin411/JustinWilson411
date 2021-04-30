import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    jw411Logo: {
        height: '60px',
        float: 'left',
        margin: '5px 0 5px 0',
        padding: '0 25px 0 0'
  }
}));

const Logo = () => {
    const classes = useStyles();
    
    return <img src={process.env.PUBLIC_URL + '/images/Jammin411-500x500.png'} className={classes.jw411Logo} alt='Justin Wilson Logo'/>
}
 
export default Logo;
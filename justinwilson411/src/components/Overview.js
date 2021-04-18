import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import OverviewImage from './OverviewImage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px 10px 0 10px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '670px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    },
    verticalAlign: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    }
}));

export default function Overview() {
    const classes = useStyles();

    const [personalData, setPersonalData] = useState({});

    useEffect(() => {
        getPersonalData();
    }, []);

    const getPersonalData = async () => {        
        const response = await axios.get('http://localhost:5000/Personal');

        setPersonalData(response.data[0]);
    };

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>        
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <OverviewImage />          
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography color='primary' variant='h1'>
                        {personalData.FirstName} <br/>
                        {personalData.LastName}
                    </Typography>
                    <br/>
                    <Typography color='secondary' variant='h5'>
                        {personalData.Credentials}
                    </Typography>       
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

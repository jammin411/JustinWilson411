import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px 10px 0 10px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '670px'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center !important'
    },
    content: {
        flexGrow: 1,
        textAlign: 'left !important'
    },
}));

export default function Overview() {
    const classes = useStyles();

    const [data, setData] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {        
        const response = await axios.get('http://localhost:5000/Experience');

        console.log(response.data);
        setData(response.data);
    };

    console.log(data.l);

    if(typeof data.length === 'undefined')
    {
        return null;
    } //end if

    return (              
        <div className={classes.root}>
            <Grid container spacing={3}>        
                <Grid item xs={12}>
                    <Typography color='primary' variant='h2' className={classes.title}>
                        My Experience
                    </Typography>   
                    <Typography color='primary' variant='subtitle1' className={classes.title}>
                        Background and Expertise
                    </Typography>
                    {
                        data.map((item) => {
                            return (
                                <div>
                                    <Typography color='primary' variant='h5' className={classes.content}>
                                        {item.Title} - {item.Company}
                                    </Typography>
                                    <Typography color='primary' variant='h6' className={classes.content}>
                                        {item.FromDate} - {item.ToDate}
                                    </Typography>
                                    <Typography color='primary' variant='subtitle1' className={classes.content}>
                                        <ul>
                                            {
                                            item.DescriptionBullets.hasOwnProperty('Bullets') ? 
                                            item.DescriptionBullets.Bullets.map((item)=> {return (<li>{item}</li>)}) 
                                            : <li>{item.DescriptionBullets.Description}</li>}  
                                        </ul>                                  
                                    </Typography>
                                </div>                            
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}

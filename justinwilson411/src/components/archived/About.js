import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import AboutImage from './AboutImage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px 10px 0 10px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary        
    },
    paperBorderless: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '760px',
        overflow: 'hidden',
        borderStyle: 'none',
        boxShadow: 'none !important'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center !important'
    },
    content: {
        flexGrow: 1,
        textAlign: 'left !important'
    }
}));

export default function Overview() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>        
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography color='primary' variant='h2' className={classes.title}>
                        About Me
                    </Typography>
                    <br/>
                    <Typography color='secondary' variant='subtitle1' className={classes.content}>
                        As the Chief Architect for Initiate Government Solutions, I am a crucial driver of our overall solution design and architecture that supports our 
                        customers' and clients' business strategies. I serve as our organization's expert for creating and validating business requirements and analysis 
                        outputs and work to translate them into an architecture that will result in a successful solution.<br /><br /> 

                        I have shaped multi-disciplinary design teams throughout development and contract phases for the $10 Billion VA EHR Modernization project.  
                        I have created project roadmaps for actionable business mandates aligned to the Strategic Plan.  Additionally, I helped architect the VX130 Data 
                        Migration Engine for the Veterans Affairs, which sends gigabytes of data per day to Cerner's HealtheIntent with an error rate of less than .25% and 
                        four-nines uptime over twelve months.<br /><br />​

                        I routinely participate in the hiring and training process by educating less experienced architects/developers and interns, conducting Microsoft 
                        training via my Microsoft Certified Trainer certification, and recently facilitated the Authority to Operate (ATO) for the VINCI research environment 
                        and developed a comprehensive playbook for future project managers to follow.<br /><br />​

                        Using the Amazon Web Services (AWS) platform, I spearheaded an AWS Data Ingestion and Analytics environment using S3, EMR, RDS, EC2, CloudWatch, 
                        SNS, and Route53.  SAS Viya, QuickSight, and Tableau are used to conduct data analytics.<br /><br />​

                        I actively utilize technologies ranging from Cloud to Storage to Software across many industries, including Healthcare, Agriculture, and Education. 
                        Additionally, I hold several certifications from Microsoft and AWS and am actively working to obtain Google Cloud Professional Certifications.<br /><br />​

                        I'm always looking to grow my personal and professional network. Feel free to connect via LinkedIn or contact me directly at <a href='mailto:Justin@Jammin411.com' title='Justin@Jammin411.com'>Justin@Jammin411.com</a>
                    </Typography>       
                </Paper>                             
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paperBorderless}>
                    <AboutImage /> 
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}
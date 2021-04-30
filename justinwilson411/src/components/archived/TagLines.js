import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import ReactRotatingText from 'react-rotating-text';

function TagLines() {
    const [personalData, setPersonalData] = useState({});

    useEffect(() => {
        getPersonalData();
    }, []);

    const getPersonalData = async () => {        
        const response = await axios.get('http://localhost:5000/Personal');

        setPersonalData(response.data[0]);
    };

    return (  
        <div>            
            <Typography variant='h6'>
                {personalData.FirstName} {personalData.LastName}<br />
                <ReactRotatingText color='#0d47a1' cursor={false} pause={1000} emptyPause={500} items={[personalData.TagLine1, personalData.TagLine2, personalData.TagLine3]} />            
            </Typography>            
        </div>   
    )
}

export default TagLines
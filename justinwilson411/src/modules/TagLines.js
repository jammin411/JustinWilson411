import axios from 'axios';
import React, {useState, useEffect } from 'react';

function TagLines() {
    const [personalData, setPersonalData] = useState({});

    useEffect(() => {
        getPersonalData();
    }, []);

    const getPersonalData = async () => {        
        const response = await axios.get('http://localhost:5000/Personal')

        setPersonalData(response.data[0]);
    };

    return (  
        <div>
            {personalData.FirstName} {personalData.LastName}<br/>
            {personalData.TagLine1} <br/>
            {personalData.TagLine2} <br/>
            {personalData.TagLine3}
        </div>
    )
}

export default TagLines
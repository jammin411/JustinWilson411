import React from 'react';
import Overview from '../modules/Overview'
import About from '../modules/About'
import Experience from '../modules/Experience'
import Education from '../modules/Education'

const Body = () => {
    return (
        <div>
            <Overview />
            <About />
            <Experience />
            <Education />
        </div>
    )
}

export default Body
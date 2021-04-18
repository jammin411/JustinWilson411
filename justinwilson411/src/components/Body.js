import React from 'react';
import Overview from './Overview'
import About from './About'
import Experience from './Experience'
import Education from './Education'

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
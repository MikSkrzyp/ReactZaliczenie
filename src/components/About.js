import React from 'react';

const About = () => {
    return (
        <div className="ui segment">
            <h1>About This App</h1>
            <p>
                This app shows u temperature, humidity and current weather condition for given city.
                It was designed by MikolajS and OskarG.
            </p>
            <p>
                It uses data from the OpenWeatherMap API.
            </p>
        </div>
    );
};

export default About;

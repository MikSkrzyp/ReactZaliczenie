import React from 'react';
import '../CSS/WeatherDisplay.css'

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return <div className="ui info message">Please enter a city to get the weather information or check your input.</div>;
    }

    const weatherImages = {
        Thunderstorm: 'Thunderstorm.jpg',
        Drizzle: 'Drizzle.jpg',
        Rain: 'Rain.jpg',
        Snow: 'Snow.jpg',
        Atmosphere: 'Atmosphere.jpg',
        Clear: 'Clear.jpg',
        Clouds: 'Clouds.jpg'
    };

    const imageUrl = `/${weatherImages[weatherData.weather[0].main] || 'default.jpg'}`;

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{weatherData.name}</div>
                <div className="description">
                    <p>Current Temperature: {weatherData.main.temp} °C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Weather Condition: {weatherData.weather[0].main}</p>
                    <img src={imageUrl} alt={weatherData.weather[0].main} style={{ width: '100%', marginTop: '10px' }} className="weather-image" />
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;

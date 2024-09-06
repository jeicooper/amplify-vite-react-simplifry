import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = '5d24e61208c1cd052560adb089643a9a';

    const handleButtonClick = async () => {
        if (!/^\d{5}(?:[-\s]\d{4})?$/.test(zipCode)) {
            setError('Invalid zip code');
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=imperial`
            );
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError('Invalid zip code');
        }
    };

    const handleChange = event => {
        setZipCode(event.target.value);
        setError(null);
    };

    if (!weatherData) {
        return (
            <div>
                <label>
                    Enter your zip code:
                    <input type="text" value={zipCode} onChange={handleChange} />
                </label>
                <button onClick={handleButtonClick}>Get Weather</button>
                {error && <div>{error}</div>}
            </div>
        );
    }

    const { name: city, main: { temp, humidity }, weather } = weatherData;

    return (
        <div>
            <label>
                Enter your zip code:
                <input type="text" value={zipCode} onChange={handleChange} />
            </label>
            <button onClick={handleButtonClick}>Get Weather</button>
            {error && <div>{error}</div>}
            <h1>Current Weather in {city}</h1>
            <div>Temperature: {temp}&deg;F</div>
            <div>Humidity: {humidity}%</div>
            <div>Weather: {weather[0].description}</div>
        </div>
    );
};
export default WeatherDisplay;
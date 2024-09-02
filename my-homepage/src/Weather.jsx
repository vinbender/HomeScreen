import React, { useEffect, useState } from 'react';

function GetWeather() {
    const [weather, setWeather] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const city = import.meta.env.VITE_CITY; // Add this line to get the API key
    console.log("API Key:", apiKey); // Add this line to check the API key


    useEffect(() => {
        if (!apiKey) {
            console.error("API key is missing");
            return;
        }

        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error("Error fetching weather data:", error));

    }, [apiKey, city]);

    return (
        <div>
            <h1>Weather</h1>
            {weather ? (
                <p>It is {weather.current?.temp_f} degrees outside.</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default GetWeather;
"use client";

import React, { useState } from 'react';

const WeatherDashboard = () => {
    // mock data
    const mockWeatherData = {
        'New York': {
            temperature: '22°C',
            humidity: '56%',
            windSpeed: '15 km/h'
        },
        'Los Angeles': {
            temperature: '27°C',
            humidity: '45%',
            windSpeed: '10 km/h',
        },
        'London': {
            temperature: '15°C',
            humidity: '70%',
            windSpeed: '20 km/h'
        },
    };

    // define states needed
    const [searchQuery, setSearchQuery] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const [notFound, setNotFound] = useState(false);

    // Check if the searchQuery exists in mockWeatherData.
    // If it does, update currentWeather with the data and add the city to searchHistory
    // If not, set cityNotFound to true.

    const handleSearch = () => {
        const weather = mockWeatherData[searchQuery];
        if (weather) {
            setCurrentWeather(weather);
            setNotFound(false);
            if (!searchHistory.includes(searchQuery)) {
                setSearchHistory([...searchHistory, searchQuery]);
            }
        } else {
            setCurrentWeather(null);
            setNotFound(true);
        }
    }

    const handlePrevCity = (city) => {
        const weather = mockWeatherData[city];
        if (weather) {
            setCurrentWeather(weather);
            setNotFound(false);
            setSearchQuery(city);
        }
    }
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            id="citySearch"
                            placeholder="Search for a city..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button id="searchButton" onClick={handleSearch}>Search</button>
                        <div id="weatherData">
                            {currentWeather && (
                                <>
                                    <div>Temperature: {currentWeather.temperature}</div>
                                    <div>Humidity: {currentWeather.humidity}</div>
                                    <div>Wind Speed: {currentWeather.windSpeed}</div>
                                </>
                            )}
                            {notFound && <div><p>City Not Found</p></div>}
                        </div>
                        <div id="previousSearches">
                            {searchHistory.map((city, index) => (
                                <button key={index} onClick={() => handlePrevCity(city)}>
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WeatherDashboard;
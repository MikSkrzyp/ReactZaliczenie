import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import SearchHistory from './SearchHistory';
import About from './About';
import NavigationBar from './NavigationBar';
import Clock from './Clock';

class App extends React.Component {
    state = { weatherData: null, history: [] };

    onSearchSubmit = (data, city) => {
        if (data && data.main && data.main.temp) {
            const entry = {
                name: city,
                temp: data.main.temp
            };
            this.setState(prevState => ({
                weatherData: data,
                history: [entry, ...prevState.history]
            }));
        }
    };

    handleDeleteHistory = (index) => {
        const newHistory = this.state.history.filter((_, i) => i !== index);
        this.setState({ history: newHistory });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Clock />
                            <SearchBar onSubmit={this.onSearchSubmit} />
                            <WeatherDisplay weatherData={this.state.weatherData} />
                            <SearchHistory history={this.state.history} onDelete={this.handleDeleteHistory} />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        );
    }
}

export default App;

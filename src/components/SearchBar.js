import React from 'react';
import axios from 'axios';
import API_KEY from '../config';
import '../CSS/SearchBar.css';

class SearchBar extends React.Component {
    state = { city: '', error: null };

    onInputChange = (event) => {
        this.setState({ city: event.target.value });
    };

    onFormSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=metric`;

        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                this.props.onSubmit(response.data, this.state.city);
                this.setState({ error: null });
            } else {
                throw new Error('City not found');
            }
        } catch (error) {
            this.setState({ error: "City not found, please try another city." });

        }
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>City Search</label>
                        <input
                            type="text"
                            value={this.state.city}
                            onChange={this.onInputChange}
                            placeholder="Enter city name"
                        />
                    </div>
                    {this.state.error && <div className="ui error message">{this.state.error}</div>}
                </form>
            </div>
        );
    }
}

export default SearchBar;

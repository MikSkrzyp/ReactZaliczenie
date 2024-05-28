import React from 'react';
import '../CSS/SearchHistory.css'
const SearchHistory = ({ history, onDelete }) => {
    if (history.length === 0) {
        return null;
    }

    return (
        <div className="ui segment">
            <h4>Search History</h4>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.temp}°C
                        <button onClick={() => onDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;

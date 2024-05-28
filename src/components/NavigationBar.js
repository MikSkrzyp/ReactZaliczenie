import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div style={{
            backgroundColor: '#f4f4f4',
            padding: '10px 20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px'
        }}>
            <Link to="/" style={{
                color: '#333',
                textDecoration: 'none',
                transition: 'color 0.3s'
            }}>Home</Link>
            <Link to="/about" style={{
                color: '#333',
                textDecoration: 'none',
                transition: 'color 0.3s'
            }}>About</Link>
        </div>
    );
};

export default NavigationBar;

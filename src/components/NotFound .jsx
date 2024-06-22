import React from 'react';

const NotFound = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red'
        }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;

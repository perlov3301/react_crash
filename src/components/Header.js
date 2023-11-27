import React, { useState, useEffect } from 'react';

const Header = ({ title }) => {
    
    return (
        <header>
            <h1> {title} </h1>
        </header>
    );
};

Header.defaultProps = {
    title : 'Task Tracker',
};

export default Header;
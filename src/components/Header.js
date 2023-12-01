import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Header.js; onClick");
    };
    return (
        <header className='header'>
            <h1
            //   style={headingStyle}
            >  {title} </h1>
            <Button color='green' text='Add'
               onClick={onClick}
            />  
        </header>
    );
};

Header.defaultProps = {
    title : 'Task Tracker',
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
};
// const headingStyle = {textAlign:'center',color:'navy',
// backgroundColor:'rgba(100,240,225,0.17)'};
export default Header;
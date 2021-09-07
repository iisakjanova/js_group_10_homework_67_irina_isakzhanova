import React from 'react';
import './Button.css';

const Button = ({value, big}) => {
    const classes = ['Button'];

    if (big) {
        classes.push('BigBtn');
    }

    return (
        <button className={classes.join(' ')}>{value}</button>
    );
};

export default Button;
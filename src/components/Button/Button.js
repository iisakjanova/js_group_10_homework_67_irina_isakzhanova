import React from 'react';
import './Button.css';

const Button = ({value, big, onClick}) => {
    const classes = ['Button'];

    if (big) {
        classes.push('BigBtn');
    }

    return (
        <button
            className={classes.join(' ')}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;
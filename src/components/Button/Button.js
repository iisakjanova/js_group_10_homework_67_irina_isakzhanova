import React from 'react';
import '../bootstrap.min.css';
import './Button.css';

const Button = ({value, onClick}) => {
    const classes = ['Button', 'btn', ];

    if (value === '=') {
        classes.push('btn-primary', 'BigBtn');
    } else if (value === 'AC') {
        classes.push('btn-danger');
    } else if (value === '<') {
        classes.push('btn-info');
    }else {
        classes.push('btn-secondary');
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
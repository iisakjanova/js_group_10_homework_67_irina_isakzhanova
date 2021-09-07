import React from 'react';
import {BUTTONS_VALUES} from "../../constants";
import Button from "../../components/Button/Button";

import './Calculator.css';

const Calculator = () => {
    return (
        <>
            <h2 className="Title">Calculator</h2>
            <div className="Calculator">
                <div className="Display"/>
                <div className="Buttons">
                    {BUTTONS_VALUES.map(value => (
                        <Button
                            key={value}
                            value={value}
                        />
                    ))}
                    <Button
                        value="="
                        big
                    />
                </div>
            </div>
        </>
    );
};

export default Calculator;
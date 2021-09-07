import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {BUTTONS_VALUES} from "../../constants";
import Button from "../../components/Button/Button";

import './Calculator.css';

const Calculator = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const total = useSelector(state => state.total);

    const checkButtonValue = value => {
        switch (value) {
            case 'AC':
                return 'CLEAR';
            case '<':
                return 'REMOVE_CHAR';
            case '=':
                return 'COUNT';
            default:
                return 'CONCAT_CHAR';
        }
    };

    const handlerClickBtn = e => {
        if (total) {
            dispatch({type: 'CLEAR'});
        }

        const payload = e.target.innerText;
        const type = checkButtonValue(payload);
        dispatch({type, payload});
    };


    return (
        <>
            <h2 className="Title">Calculator</h2>
            <div className="Calculator">
                <div className="Display">
                    <p>{counter}</p>
                    {total ? <p>= <b>{total}</b></p> : null}
                </div>
                <div className="Buttons">
                    {BUTTONS_VALUES.map(value => (
                        <Button
                            key={value}
                            value={value}
                            onClick={handlerClickBtn}
                        />
                    ))}
                    <Button
                        value="="
                        big
                        onClick={handlerClickBtn}
                    />
                </div>
            </div>
        </>
    );
};

export default Calculator;
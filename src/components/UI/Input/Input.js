import React from 'react';
import classes from './Input.css';

const Input = (props) => {

    let inputElement = null;
    let validationError = '';

    if(props.invalid && props.shouldValidate && props.touched){
        validationError = <p className={classes.Invalid}>Please ented a valid value!</p>;
    }

    switch(props.elementType){
    
        case('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}  />;
            break;
        case('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed}  />;
            break;
        case('select'):
            inputElement = (
                <select value={props.value} onChange={props.changed}  >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value } onChange={props.changed}   />;
    }

    return(
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );

};

export default Input;
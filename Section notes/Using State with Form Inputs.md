import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [enteredInput, setEnteredInput] = React.useState('');
    const [enteredValidity, setEnteredValidity] = React.useState('Invalid');
    const inputChangeHandler = (event) => {
        if (event.target.value.trim().length < 3) {
            setEnteredInput(event.target.value);
            setEnteredValidity("Invalid");
        } else {
            setEnteredValidity("Valid");
        }
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={inputChangeHandler}/>
            <p>{enteredValidity} message</p>
        </form>
    );
}
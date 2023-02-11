import React, { useState } from 'react';

import "./ExpenseForm.css"

const ExpenseForm = () => {
// Individual state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); 
// Common states
/*     const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */

    const titleChangeHandler = (event) => {
        //From individual state
         setEnteredTitle(event.target.value); 
        //From common state - possible to depend on outdated or incorrect state snapshot
/*         setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        }) */
        // React guarantees that the state snapshot offered here is latest
/*         setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
/*         setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        }) */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.taget.value);
/*         setUserInput({
            ...userInput,
            enteredDate: event.target.value
        }) */
    }

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">
                Add Expense
            </button>
        </div>
    </form>
}

export default ExpenseForm;
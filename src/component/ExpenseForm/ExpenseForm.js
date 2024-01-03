import React from 'react';
import './ExpenseForm.css';
import NewExpenseForm from './NewExpenseForm';
const  ExpenseForm=(props)=>{
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    };
    return(
        <div className='new-expenseis'>
            <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}
export default ExpenseForm;
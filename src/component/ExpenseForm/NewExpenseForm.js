import React, {useState} from 'react';
import './NewExpesneForm.css';
const NewExpenseForm=()=>{
const[newTitle,enteredTitle]=useState('' );
const[newAmount,enteredAmount]=useState('' );
const[newDate,enteredDate]=useState('' );
    const handleEventTitle=(event)=>{
        enteredTitle(event.target.value)
    }
    const handleEventAmount=(event)=>{
        enteredAmount(event.target.value)
    }
    const handleEventDate=(event)=>{
        enteredDate(event.target.value)
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Title</label>
                <input className="new-expense__control input" type='text' placeholder='Enter title' onClickCapture={handleEventTitle}/>

            </div>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Amount</label>
                <input className="new-expense__control input" type='number' placeholder='Enter Number' onClickCapture={handleEventAmount}/>

            </div>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Date</label>
                <input className="new-expense__control input" type='date' placeholder='Enter Date' min='2021-01-01' max="2024-12-31" onClickCapture={handleEventDate}/>

            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit" >Add Expenses</button>
        </div>
    </form>
}
export default NewExpenseForm;
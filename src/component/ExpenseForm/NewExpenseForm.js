import React from 'react';
import './NewExpesneForm.css';
const NewExpenseForm=()=>{
    const handleEvent=(event)=>{
        console.log(event.target.value)
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Title</label>
                <input className="new-expense__control input" type='text' placeholder='Enter title' onClickCapture={handleEvent}/>

            </div>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Amount</label>
                <input className="new-expense__control input" type='number' placeholder='Enter Number' onClickCapture={handleEvent}/>

            </div>
            <div className='new-expense__control'>
                <label className="new-expense__control label">Date</label>
                <input className="new-expense__control input" type='date' placeholder='Enter Date' min='2021-01-01' max="2024-12-31" onClickCapture={handleEvent}/>

            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit" >Add Expenses</button>
        </div>
    </form>
}
export default NewExpenseForm;
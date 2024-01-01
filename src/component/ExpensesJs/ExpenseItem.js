import React,{useState} from 'react';
import '../ExpenseCss/ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem=(props)=>{
   const [amount,setExpense]= useState(props.amount);
    const clicked=()=>{
        setExpense("100$");
    }
    return(<div className="expense-item">
        <div >
            <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
        <ExpenseDetails title={props.title}>
        </ExpenseDetails>
        <div className="expense-item__price">
            <ExpenseDetails amount={amount}>
                </ExpenseDetails></div>
        </div>
        <button onClick={clicked}>Change</button>
    </div> 
    
    
    );
    

}
export default ExpenseItem;

import '../ExpenseCss/ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
const ExpenseItem=(props)=>{
    // const expenseDate=new Date(2022, 2, 27);
    // const expenseTitle="Car Insurance";
    // const expenseAmount=295;
    const clicked=()=>{
        alert ("deleting");
    }
    return(<div className="expense-item">
        <div >
            <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
        <ExpenseDetails title={props.title}>
        </ExpenseDetails>
        <div className="expense-item__price">
            <ExpenseDetails amount={props.amount}>
                </ExpenseDetails></div>
        </div>
        <button onClick={clicked}>DELETE</button>
    </div> 
    
    
    );
    

}
export default ExpenseItem;

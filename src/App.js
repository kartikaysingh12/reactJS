import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/ExpensesJs/ExpenseItem';
import ExpenseForm from './component/ExpenseForm/ExpenseForm';
const App=()=>
 {
  const expenses=[
    {
      id :"e1",title:"Car insurance", amount:800, date:new Date(2022, 2 ,11)
    },
    {
      id :"e2",title:"Electricity", amount: 1100, date:new Date(2022, 4 ,13)
    },
    {
      id :"e3",title:"Home Renovation", amount: 1500, date:new Date(2022, 3 ,15)
    }
  
  ]
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpenseForm/>
        <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}>
        </ExpenseItem>
        <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date}>
        </ExpenseItem>
        <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount}
        date={expenses[2].date}>
        </ExpenseItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const title = props.expenses.title;
  const amount = props.expenses.amount;
  const date = props.expenses.date;

  return (
    <div className="expenses">
        <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem>
      
    </div>
  );
}

export default Expenses;

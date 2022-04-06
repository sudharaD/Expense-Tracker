import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bike Serice",
      amount: "3000",
      date: new Date(2021, 2, 6),
    },
    {
      id: "e2",
      title: "Buy fruits",
      amount: "400",
      date: new Date(2021, 6, 5),
    },
    {
      id: "e3",
      title: "Buy cloths",
      amount: "6000",
      date: new Date(2022, 0, 3),
    },
    {
      id: "e1",
      title: "Petrol",
      amount: "800",
      date: new Date(2022, 3, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      
        <Expenses expenses={expenses[0]} />
      
      
        <Expenses expenses={expenses[1]} />
      
      
        <Expenses expenses={expenses[2]} />
      
      
        <Expenses expenses={expenses[3]} />
      
    </div>
  );
}

export default App;

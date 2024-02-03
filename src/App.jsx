import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ text: "", amount: 0 });
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    setBalance(() => balance + formData.amount);
    if (formData.amount > 0) {
      setIncome(() => income + formData.amount);
    } else {
      setExpense(() => expense + formData.amount);
    }
    setTransactions([
      { text: formData.text, amount: formData.amount },
      ...transactions,
    ]);
    // console.log(transactions);
    setFormData({ text: "", amount: 0 });
  }
  return (
    <>
      <div className="">
        <h3 className="m-4 font-bold text-xl">Add Transaction</h3>
        <form action="#" onSubmit={handleSubmit}>
          <div className="w-full md:w-1/3">
            <label
              className="m-5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Text
            </label>
            <input
              className="flex m-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter Text"
              value={formData.text}
              onChange={(e) => {
                setFormData({ text: e.target.value, amount: formData.amount });
              }}
              id="name"
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="m-5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Amount
            </label>
            <input
              className="flex m-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              placeholder="Enter Amount"
              value={parseInt(formData.amount)}
              onChange={(e) => {
                setFormData({
                  text: formData.text,
                  amount: parseInt(e.target.value),
                });
              }}
              id="name"
            />
          </div>
          <button
            type="submit"
            className="inline-flex m-3 items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          >
            Add Transaction
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-2 h-4 w-4"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>
      </div>
      <div className="">
        <h3 className="text-center font-bold">Balance</h3>
        <p className="text-center">{balance}</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-1">
        <div>
          <h3 className="text-center font-bold">Income</h3>
          <p className="text-center">{income}</p>
        </div>
        <div>
          <h3 className="text-center font-bold">Expense</h3>
          <p className="text-center">{expense}</p>
        </div>
      </div>
      <div className="">
        <h3 className="text-center font-bold">Transactions</h3>
        <p className="text-center mt-5">
          {transactions.map((t) => (
            <>
              <h4 className="mt-4 font-bold">{t.text}</h4>
              <p>{t.amount}</p>
              <p>{t.amount > 0 ? "Income" : "Expense"}</p>
            </>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;

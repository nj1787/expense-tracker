import IncomeExpense from "./IncomeExpense";
import Transactions from "./Transactions";

function Balance() {
  let balance = 0;
  return (
    <>
      <div>
        <h3>Balance</h3>
        <p>{balance}</p>
      </div>
      <div>
        <IncomeExpense />
      </div>
      <div>
        <Transactions />
      </div>
    </>
  );
}

export default Balance;

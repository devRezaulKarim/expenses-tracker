import GetInput from "../GetInput/GetInput";
import ExpensesTable from "../ExpensesTable/ExpensesTable";
import { useContext } from "react";
import { ExpenseContext } from "../../Utilities/Context";

export default function Home() {
  const { todaysExpenses, lastSevenDaysExpenses, thisMonthsExpenses } =
    useContext(ExpenseContext);
  return (
    <div className="grid grid-cols-1	lg:grid-cols-2	gap-8">
      <GetInput />
      <ExpensesTable dataFor="Today&#39;s Expenses" expenses={todaysExpenses} />
      <ExpensesTable
        dataFor="Last Seven day&#39;s Expenses"
        expenses={lastSevenDaysExpenses}
      />
      <ExpensesTable
        dataFor="This Month&#39;s Expenses"
        expenses={thisMonthsExpenses}
      />
    </div>
  );
}

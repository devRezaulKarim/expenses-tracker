import GetInput from "../GetInput/GetInput";
import ExpensesTable from "../ExpensesTable/ExpensesTable";
import { useContext } from "react";
import { ExpenseContext } from "../../Utilities/Context";

export default function Home() {
  const {
    allExpenses,
    todaysExpenses,
    lastSevenDaysExpenses,
    thisMonthsExpenses,
  } = useContext(ExpenseContext);

  const classes = "grid grid-cols-1	lg:grid-cols-2	gap-4";
  return (
    <div className={allExpenses.length > 0 && classes}>
      <GetInput />
      {allExpenses.length > 0 && (
        <ExpensesTable
          dataFor="Today&#39;s Expenses"
          route="today"
          expenses={todaysExpenses}
        />
      )}

      {allExpenses.length > 0 && (
        <ExpensesTable
          dataFor="Last Seven day&#39;s Expenses"
          route="week"
          expenses={lastSevenDaysExpenses}
        />
      )}
      {allExpenses.length > 0 && (
        <ExpensesTable
          dataFor="This Month&#39;s Expenses"
          route="month"
          expenses={thisMonthsExpenses}
        />
      )}
    </div>
  );
}

import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExpenseContext } from "../../Utilities/Context";
import DetailsTable from "./DetailsTable";

export default function Details() {
  const { todaysExpenses, lastSevenDaysExpenses, thisMonthsExpenses } =
    useContext(ExpenseContext);
  const location = useLocation().pathname;
  const expenses =
    location === "/details/today"
      ? todaysExpenses
      : location === "/details/week"
      ? lastSevenDaysExpenses
      : thisMonthsExpenses;

  console.log(expenses);
  return (
    <div>
      <div>Details</div>
      <div>
        <Link to="/details/today">today</Link>
        <Link to="/details/week">week</Link>
        <Link to="/details/month">month</Link>
      </div>

      <div>
        {expenses.map((expense, i) => (
          <DetailsTable key={i} expense={expense} />
        ))}
      </div>
    </div>
  );
}

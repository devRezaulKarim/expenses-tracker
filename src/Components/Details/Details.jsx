import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExpenseContext } from "../../Utilities/Context";
import DetailsTable from "./DetailsTable";

export default function Details() {
  const { todaysExpenses, lastSevenDaysExpenses, thisMonthsExpenses } =
    useContext(ExpenseContext);
  const location = useLocation().pathname;
  const expenses =
    location === "/today"
      ? todaysExpenses
      : location === "/week"
      ? lastSevenDaysExpenses
      : thisMonthsExpenses;

  console.log(expenses);

  const classes = "px-10 pb-3 pt-1 rounded-t-lg";
  const activeClasses = "bg-rose-100";
  const thClasses = "border border-rose-600 border-collapse";
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-red-200 w-8/12 min-h-[500px] pt-5 rounded-xl p-5">
        <div className="text-3xl font-semibold text-center mb-5">Details</div>
        <div className="flex justify-evenly text-lg font-semibold">
          <Link
            to="/today"
            className={`${location === "/today" && activeClasses} ${classes}`}
          >
            Today
          </Link>
          <Link
            to="/week"
            className={`${location === "/week" && activeClasses} ${classes}`}
          >
            This Week
          </Link>
          <Link
            to="/month"
            className={`${location === "/month" && activeClasses} ${classes}`}
          >
            This Month
          </Link>
        </div>

        <div className="p-2 bg-rose-100 rounded">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-100 border border-blue-500">
                <th className={`${thClasses} w-[10%]`}>No</th>
                <th className={`${thClasses} w-[15%]`}>Category</th>
                <th className={thClasses}>Note</th>
                <th className={`${thClasses} w-[15%]`}>Date</th>
                <th className={`${thClasses} w-[15%]`}>Time</th>
                <th className={`${thClasses} w-[10%]`}>Amount</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense, i) => (
                <DetailsTable key={i} no={i} expense={expense} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

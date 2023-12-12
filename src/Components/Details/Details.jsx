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

  const classes = `px-10 rounded`;
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-red-200 w-8/12 min-h-[500px] pt-5 rounded-xl p-5">
        <div className="text-3xl font-semibold text-center mb-5">Details</div>
        <div className="flex justify-evenly text-lg font-semibold mb-3">
          <Link
            to="/today"
            className={`${
              location === "/today" && "text-white bg-rose-600"
            } ${classes}`}
          >
            Today
          </Link>
          <Link
            to="/week"
            className={`${
              location === "/week" && "text-white bg-rose-600"
            } ${classes}`}
          >
            This Week
          </Link>
          <Link
            to="/month"
            className={`${
              location === "/month" && "text-white bg-rose-600"
            } ${classes}`}
          >
            This Month
          </Link>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-rose-100 border border-blue-500">
              <th className="border border-rose-600 border-collapse w-[10%]">
                No
              </th>
              <th className="border border-rose-600 border-collapse w-[15%]">
                Category
              </th>
              <th className="border border-rose-600 border-collapse ">Note</th>
              <th className="border border-rose-600 border-collapse w-[15%]">
                Date
              </th>
              <th className="border border-rose-600 border-collapse w-[15%]">
                Time
              </th>
              <th className="border border-rose-600 border-collapse w-[15%]">
                Amount
              </th>
            </tr>
          </thead>
        </table>
        <div>
          {expenses.map((expense, i) => (
            <DetailsTable key={i} expense={expense} />
          ))}
        </div>
      </div>
    </div>
  );
}

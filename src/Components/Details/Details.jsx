import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExpenseContext } from "../../Utilities/Context";
import DetailsTable from "./DetailsTable";
import { IoMdCloseCircleOutline } from "react-icons/io";

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

  const classes = "px-10 pb-3 pt-1 rounded-t-2xl relative duration-100";
  const activeClasses =
    "bg-rose-100 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:bottom-0 after:right-[-30px] after:rounded-b-3xl after:shadow-[-15px_5px_0_0_#ffe4e6] before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:bottom-0 before:left-[-30px] before:rounded-b-3xl before:shadow-[15px_5px_0_0_#ffe4e6]";

  const thClasses = "border border-rose-600 border-collapse";

  return (
    <div className="flex justify-center min-h-screen ">
      <div className="bg-red-200 w-8/12 min-h-[500px] pt-5 rounded-xl p-5 relative">
        <div className="text-3xl font-semibold text-center mb-5">Details</div>

        <Link to="/" className="absolute top-2	right-2 ">
          <IoMdCloseCircleOutline className="text-4xl text-rose-800 duration-300 hover:rotate-180" />
        </Link>

        <div className="flex justify-evenly text-lg font-semibold">
          <Link
            to="/today"
            className={`${
              location === "/today" ? activeClasses : "hover:text-white"
            } ${classes}`}
          >
            Today
          </Link>
          <Link
            to="/week"
            className={`${
              location === "/week" ? activeClasses : "hover:text-white"
            } ${classes}`}
          >
            This Week
          </Link>
          <Link
            to="/month"
            className={`${
              location === "/month" ? activeClasses : "hover:text-white"
            } ${classes}`}
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

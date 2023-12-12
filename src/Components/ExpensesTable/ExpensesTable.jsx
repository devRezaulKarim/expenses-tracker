/* eslint-disable react/prop-types */
export default function ExpensesTable({ dataFor, expenses, route }) {
  const categorizedTotalExpenses = expenses.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + +cur["amount"];
    return acc;
  }, {});

  const categorizedTotalExpensesAsArray = Object.keys(
    categorizedTotalExpenses
  ).map((key) => ({
    category: key,
    amount: categorizedTotalExpenses[key],
  }));
  const totalExpense = expenses.reduce((acc, cur) => {
    acc += +cur.amount;
    return acc;
  }, 0);
  return (
    <div className="w-80	bg-rose-100	 mx-auto p-2 rounded-lg md:w-3/4 md:text-3xl lg:w-full lg:text-base	">
      <div className="flex justify-between	">
        <h1 className="text-xl font-semibold text-red-600 md:text-3xl lg:text-base	">
          {dataFor}
        </h1>
        {totalExpense > 0 && (
          <a
            href={`/${route}`}
            className="text-lg font-semibold	hover:text-white duration-200	hover:bg-rose-500 px-1 rounded"
          >
            Details
          </a>
        )}
      </div>
      <h1 className="my-2 md:my-5">
        Total Expense:{" "}
        <span className="text-red-700 text-lg font-bold md:text-3xl lg:text-base">
          ৳ {totalExpense || "000"}
        </span>
      </h1>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border border-black">
              <th className="w-1/2 border border-black bg-purple-200 ">
                Category
              </th>
              <th className="w-1/2 border border-black bg-blue-200">Amount</th>
            </tr>
          </thead>
          <tbody>
            {categorizedTotalExpensesAsArray.map((entry, i) => (
              <TableRow key={i} entry={entry} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableRow = ({ entry }) => {
  return (
    <tr className="bg-lime-100	border border-black">
      <td className="text-center">{entry.category}:</td>
      <td className="text-center">৳{entry.amount}</td>
    </tr>
  );
};

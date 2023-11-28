/* eslint-disable react/prop-types */
export default function ExpensesTable({ dataFor }) {
  return (
    <div className="w-80	bg-rose-100	 mx-auto p-2 rounded-lg md:w-3/4 md:text-3xl lg:w-80 lg:text-base	">
      <h1 className="text-xl font-semibold text-red-600 md:text-3xl lg:text-base	">
        {dataFor}
      </h1>
      <h1 className="my-2 md:my-5">
        Total Expense:{" "}
        <span className="text-red-700 text-lg font-bold md:text-3xl lg:text-base">
          ৳000
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
            <tr className="bg-lime-100	border border-black">
              <td className="text-center">Food:</td>
              <td className="text-center">৳000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

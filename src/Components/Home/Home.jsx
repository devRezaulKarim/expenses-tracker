import GetInput from "../GetInput/GetInput";
// import LastSevenDays from "../LastSevenDays/LastSevenDays";
// import ThisMonth from "../ThisMonth/ThisMonth";
import ExpensesTable from "../ExpensesTable/ExpensesTable";

export default function Home() {
  return (
    <div className="grid grid-cols-1	lg:grid-cols-2	gap-8">
      <GetInput />
      <ExpensesTable dataFor="Today&#39;s Expenses" />
      <ExpensesTable dataFor="Last Seven day&#39;s Expenses" />
      <ExpensesTable dataFor="This Month&#39;s Expenses" />
    </div>
  );
}

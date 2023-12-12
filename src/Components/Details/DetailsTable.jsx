/* eslint-disable react/prop-types */
export default function DetailsTable({
  no,
  expense: { category, note, fullDate, time, amount },
}) {
  const tdClasses = "border border-rose-600 border-collapse p-1";
  return (
    <tr>
      <td className={`${tdClasses} text-center`}>{no + 1}</td>
      <td className={tdClasses}>{category}</td>
      <td className={tdClasses}>{note}</td>
      <td className={`${tdClasses} text-center`}>{fullDate}</td>
      <td className={`${tdClasses} text-center`}>{time}</td>
      <td className={`${tdClasses} text-center`}>{amount}</td>
    </tr>
  );
}

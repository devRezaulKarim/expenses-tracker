/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { ExpenseContext } from "../../Utilities/Context";

export default function GetInput() {
  const { dispatch } = useContext(ExpenseContext);
  const amount = useRef();
  const category = useRef();

  const categories = [
    "Child Care",
    "Clothing",
    "Food",
    "Health Care",
    "Housing",
    "Lifestyle",
    "Personal",
    "Toiletries",
    "Transportation",
    "Utilities",
    "Other",
  ];

  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const GeneratedPayload = {
      category: category.current.value,
      amount: amount.current.value,
      fullDate: [
        String(new Date().getDate()).padStart(2, "0"),
        String(new Date().getMonth() + 1).padStart(2, "0"),
        new Date().getFullYear(),
      ].join("-"),
      month: String(new Date().getMonth() + 1).padStart(2, "0"),
    };

    if (!amount.current.value.trim()) {
      alert("You can't make an empty entry");
    } else if (+amount.current.value < 1) {
      alert("You can't make an entry with 0 amount");
    } else if (category.current.value === "none") {
      alert("You have to choose a category");
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: GeneratedPayload });
      amount.current.value = "";
      category.current.value = "none";
    }
  };

  return (
    <div className="w-80 bg-rose-100 mx-auto p-5 rounded-lg md:w-3/4 md:text-3xl lg:text-base	lg:w-80">
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <h3 className="text-center mb-2">Add Your Expenses</h3>
        <div className="mb-5  flex gap-2">
          <label className="w-1/4" htmlFor="amount">
            Amount:
          </label>
          <input
            id="amount"
            ref={amount}
            className="w-3/4 px-2"
            type="text"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-evenly gap-2">
          <select
            defaultValue="none"
            ref={category}
            className=""
            name="name"
            id=""
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input className="bg-red-500 w-full" type="submit" value="Done" />
        </div>
      </form>
    </div>
  );
}

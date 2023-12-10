/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { ExpenseContext } from "../../Utilities/Context";

export default function GetInput() {
  const { dispatch } = useContext(ExpenseContext);
  const amount = useRef();
  const category = useRef();

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
      month: new Date().getMonth() + 1,
    };

    if (!amount.current.value.trim()) {
      alert("You can't make an empty entry");
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
            ref={amount}
            className="w-3/4 px-2"
            type="text"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-evenly gap-2">
          <select ref={category} className="" name="name" id="">
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Life Style">Life Style</option>
          </select>
          <input className="bg-red-500 w-full" type="submit" value="Done" />
        </div>
      </form>
    </div>
  );
}

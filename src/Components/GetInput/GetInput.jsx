/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { ExpenseContext } from "../../Utilities/Context";

export default function GetInput() {
  const { dispatch } = useContext(ExpenseContext);
  const amount = useRef();
  const category = useRef();
  const note = useRef();

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
      note: note.current.value,
      fullDate: [
        String(new Date().getDate()).padStart(2, "0"),
        String(new Date().getMonth() + 1).padStart(2, "0"),
        new Date().getFullYear(),
      ].join("-"),
      month: String(new Date().getMonth() + 1).padStart(2, "0"),
      time: new Date().toLocaleTimeString(),
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
      note.current.value = "";
    }
  };

  return (
    <div className="w-90 bg-rose-100 mx-auto p-5 rounded-lg md:w-3/4 md:text-3xl lg:text-base	lg:w-full">
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <h3 className="text-center mb-2">Add Your Expenses</h3>
        <div className="mb-5  flex gap-3">
          <label className="w-1/4" htmlFor="amount">
            Amount:
          </label>
          <input
            id="amount"
            ref={amount}
            className="w-3/4 px-2 py-1 rounded"
            type="number"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-5  flex gap-2">
          <label className="w-1/4" htmlFor="cat">
            Category:{" "}
          </label>
          <select
            defaultValue="none"
            ref={category}
            className="w-3/4 px-2 p-1 rounded"
            name="name"
            id="cat"
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
        </div>
        <div className="mb-5  flex gap-3">
          <label className="w-1/4" htmlFor="note">
            Note:
          </label>
          <textarea
            ref={note}
            className="resize-none	w-3/4 px-2 py-1 rounded"
            name="note"
            id="note"
            maxLength="50"
            placeholder="Add a note"
          ></textarea>
        </div>
        <input
          className="bg-red-700 text-white rounded w-full text-xl cursor-pointer	hover:shadow-md hover:shadow-gray-400	duration-100 hover:-translate-y-0.5"
          type="submit"
          value="Done"
        />
      </form>
    </div>
  );
}

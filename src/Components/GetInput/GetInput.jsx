export default function GetInput() {
  return (
    <div className="w-80 bg-rose-100 mx-auto p-5 rounded-lg md:w-3/4 md:text-3xl lg:text-base	lg:w-80">
      <form action="">
        <h3 className="text-center mb-2">Add Your Expenses</h3>
        <div className="mb-5  flex gap-2">
          <label className="w-1/4" htmlFor="amount">
            Amount:
          </label>
          <input
            className="w-3/4 px-2"
            type="text"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-evenly gap-2">
          <select className="" name="name" id="">
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

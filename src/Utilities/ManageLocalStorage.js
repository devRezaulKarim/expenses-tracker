/* eslint-disable no-unused-vars */
const initialValue = {
  allExpenses: [],
  todaysExpenses: [],
  lastSevenDaysExpenses: [],
  thisMonthsExpenses: [],
};

const fullDate = [
  String(new Date().getDate()).padStart(2, "0"),
  String(new Date().getMonth() + 1).padStart(2, "0"),
  new Date().getFullYear(),
].join("-");

export const getFromLocal = () => {
  const savedJSONdata = localStorage.getItem("entries");
  const savedData = savedJSONdata ? JSON.parse(savedJSONdata) : initialValue;
  return savedData;
};

export const setToLocal = (state) => {
  localStorage.setItem("entries", JSON.stringify(state));
};

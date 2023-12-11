/* eslint-disable no-unused-vars */
const initialValue = {
  allExpenses: [],
  todaysExpenses: [],
  lastSevenDaysExpenses: [],
  thisMonthsExpenses: [],
};

const today = [
  String(new Date().getDate()).padStart(2, "0"),
  String(new Date().getMonth() + 1).padStart(2, "0"),
  new Date().getFullYear(),
].join("-");

const lastWeekDate = [
  String(new Date().getDate() - 7).padStart(2, "0"),
  String(new Date().getMonth() + 1).padStart(2, "0"),
  new Date().getFullYear(),
].join("-");

const month = String(new Date().getMonth() + 1).padStart(2, "0");

export const getFromLocal = () => {
  const savedJSONdata = localStorage.getItem("entries");
  const savedData = savedJSONdata ? JSON.parse(savedJSONdata) : initialValue;
  const dataFilteredByDate = [...savedData.allExpenses].reduce(
    (mainObj, curr) => {
      mainObj.allExpenses.push(curr);
      if (curr.month == month) {
        mainObj.thisMonthsExpenses.push(curr);
        if (curr.fullDate > lastWeekDate) {
          mainObj.lastSevenDaysExpenses.push(curr);
          if (curr.fullDate === today) {
            mainObj.todaysExpenses.push(curr);
          }
        }
      }

      return mainObj;
    },
    {
      allExpenses: [],
      todaysExpenses: [],
      lastSevenDaysExpenses: [],
      thisMonthsExpenses: [],
    }
  );

  return dataFilteredByDate;
};

export const setToLocal = (state) => {
  localStorage.setItem("entries", JSON.stringify(state));
};

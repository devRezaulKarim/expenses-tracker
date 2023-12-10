/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { getFromLocal, setToLocal } from "./ManageLocalStorage";
import Reducer from "./Reducer";
import { useReducer } from "react";

export const ExpenseContext = createContext(getFromLocal());
export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, getFromLocal());

  useEffect(() => {
    setToLocal(state);
  }, [state]);

  const value = {
    allExpenses: state.allExpenses,
    todaysExpenses: state.todaysExpenses,
    lastSevenDaysExpenses: state.lastSevenDaysExpenses,
    thisMonthsExpenses: state.thisMonthsExpenses,
    dispatch,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

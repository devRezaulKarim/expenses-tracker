/* eslint-disable react/prop-types */
import { createContext } from "react";
import { initialValue } from "./ManageLocalStorage";
import Reducer from "./Reducer";
import { useReducer } from "react";

export const ExpenseContext = createContext(initialValue);
export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  const value = {
    expenses: state.expenses,
    dispatch,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

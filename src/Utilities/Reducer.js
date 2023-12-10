export default function Reducer(state, action) {
  const { type, payload } = action;
  const {
    allExpenses,
    todaysExpenses,
    lastSevenDaysExpenses,
    thisMonthsExpenses,
  } = state;
  switch (type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        allExpenses: [payload, ...allExpenses],
        todaysExpenses: [payload, ...todaysExpenses],
        lastSevenDaysExpenses: [payload, ...lastSevenDaysExpenses],
        thisMonthsExpenses: [payload, ...thisMonthsExpenses],
      };

    default:
      return state;
  }
}

export default function Reducer(state, action) {
  const { type, payload } = action;
  const { expenses } = state;
  switch (type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [payload, ...expenses],
      };

    default:
      return state;
  }
}

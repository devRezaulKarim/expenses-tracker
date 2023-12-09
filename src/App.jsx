import Home from "./Components/Home/Home";
import { ExpenseContextProvider } from "./Utilities/Context";

function App() {
  return (
    <ExpenseContextProvider>
      <div className="max-w-screen-md m-auto p-8">
        <Home />
      </div>
    </ExpenseContextProvider>
  );
}

export default App;

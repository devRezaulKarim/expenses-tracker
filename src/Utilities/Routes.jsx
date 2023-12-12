import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:dates",
    element: <Details />,
  },
]);

export default Routes;

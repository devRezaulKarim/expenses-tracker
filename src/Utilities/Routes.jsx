import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import App from "../App";
import TodaysDetails from "../Components/Details/TodaysDetails";
import WeeksDetails from "../Components/Details/WeeksDetails";
import MonthsDetails from "../Components/Details/MonthsDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
    children: [
      {
        path: "/details/today",
        element: <TodaysDetails />,
      },
      {
        path: "/details/week",
        element: <WeeksDetails />,
      },
      {
        path: "/details/month",
        element: <MonthsDetails />,
      },
    ],
  },
]);

export default Routes;

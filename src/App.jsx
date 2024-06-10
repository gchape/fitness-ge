import "./css/App.css";
import HomePage from "./components/HomePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Supplements from "./components/Supplements";
import Accessories from "./components/Accessories";
import Weights from "./components/Weights";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
          children: [
            {
              path: "supplements",
              element: <Supplements />,
            },
            {
              path: "accessories",
              element: <Accessories />,
            },
            {
              path: "weights",
              element: <Weights />,
            },
          ],
        },
      ])}
    />
  );
}

export default App;

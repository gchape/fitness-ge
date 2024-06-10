import "./css/App.css";
import HomePage from "./components/HomePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Supplements from "./components/Supplements";
import Accessories from "./components/Accessories";
import Weights from "./components/Weights";

function App() {
  const fetchAPI = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    return data.results[0].content.results.organic;
  };

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
              loader: () => fetchAPI("src/assets/gym_supplements.json"),
            },
            {
              path: "accessories",
              element: <Accessories />,
              loader: () => fetchAPI("src/assets/gym_accessories.json"),
            },
            {
              path: "weights",
              element: <Weights />,
              loader: () => fetchAPI("src/assets/gym_weights.json"),
            },
          ],
        },
      ])}
    />
  );
}

export default App;

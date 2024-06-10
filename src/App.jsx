import "./css/App.css";

import HomePage from "./components/HomePage";
import AccessoriesPage from "./components/AccessoriesPage";
import SupplementsPage from "./components/SupplementsPage";
import WeightsPage from "./components/WeightsPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
              element: <SupplementsPage />,
              loader: () => fetchAPI("src/assets/gym_supplements.json"),
            },
            {
              path: "accessories",
              element: <AccessoriesPage />,
              loader: () => fetchAPI("src/assets/gym_accessories.json"),
            },
            {
              path: "weights",
              element: <WeightsPage />,
              loader: () => fetchAPI("src/assets/gym_weights.json"),
            },
          ],
        },
      ])}
    />
  );
}

export default App;

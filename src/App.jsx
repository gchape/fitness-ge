import "./css/App.css";

import HomePage from "./components/HomePage";
import AccessoriesPage from "./components/AccessoriesPage";
import SupplementsPage from "./components/SupplementsPage";
import WeightsPage from "./components/WeightsPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs, { contactUsAction } from "./components/ContactUs";
import ThankYouPage from "./components/ThankYouPage";
import { Provider } from "react-redux";

import store from "./store";
import SearchPage, { searchPageLoader } from "./components/SearchPage";

function App() {
  const fetchAPI = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    return data.results[0].content.results.organic;
  };

  return (
    <Provider store={store}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <HomePage />,
            children: [
              {
                path: "supplements",
                element: <SupplementsPage />,
                loader: () => fetchAPI("/assets/gym_supplements.json"),
              },
              {
                path: "accessories",
                element: <AccessoriesPage />,
                loader: () => fetchAPI("/assets/gym_accessories.json"),
              },
              {
                path: "weights",
                element: <WeightsPage />,
                loader: () => fetchAPI("/assets/gym_weights.json"),
              },
              {
                path: "contact-us",
                element: <ContactUs />,
                action: contactUsAction,
              },
              {
                path: "thank-you",
                element: <ThankYouPage />,
              },
              {
                path: "search/:query",
                element: <SearchPage />,
                loader: searchPageLoader,
              },
            ],
          },
        ])}
      />
    </Provider>
  );
}

export default App;

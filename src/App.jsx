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
import SearchPage from "./components/SearchPage";

function App() {
  const url = {
    supplements: "/assets/gym_supplements.json",
    accessories: "/assets/gym_accessories.json",
    weights: "/assets/gym_weights.json",
  };

  const fetchData = async (urls, f) => {
    return await urls.reduce(async (accumulatorPromise, url) => {
      const accumulator = await accumulatorPromise;
      let resp = await fetch(url);
      let data = await resp.json();

      return [
        ...accumulator,
        ...(f === undefined
          ? data.results[0].content.results.organic
          : f(data.results[0].content.results.organic)),
      ];
    }, Promise.resolve([]));
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
                loader: () => fetchData([url.supplements]),
              },
              {
                path: "accessories",
                element: <AccessoriesPage />,
                loader: () => fetchData([url.accessories]),
              },
              {
                path: "weights",
                element: <WeightsPage />,
                loader: () => fetchData([url.weights]),
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
                loader: ({ params }) => {
                  return fetchData(
                    [url.supplements, url.accessories, url.weights],
                    (data) =>
                      data.filter((pt) =>
                        pt.title
                          .toLowerCase()
                          .includes(params.query.trim().toLowerCase())
                      )
                  );
                },
              },
            ],
          },
        ])}
      />
    </Provider>
  );
}

export default App;

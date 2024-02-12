import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Main from "./components/Main/Main";

import UserDetails, {
  loader as userLoader,
} from "./components/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/cards/:id",
        element: <UserDetails />,
        loader: userLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

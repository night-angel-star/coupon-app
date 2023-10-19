// import { Login } from "./pages/auth";
import { All, Detail, Home, Search, My } from "./pages/store";
import PrivateRoute from "./components/utlis/PrivateRoute";

const AppRoutes = [
  {
    path: "/all",
    element: (
      <PrivateRoute>
        <All />
      </PrivateRoute>
    ),
  },
  {
    path: "/detail",
    element: (
      <PrivateRoute>
        <Detail />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <PrivateRoute>
        <Search />
      </PrivateRoute>
    ),
  },
  {
    path: "/my",
    element: (
      <PrivateRoute>
        <My />
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/auth/login",
  //   element: <Login />,
  // },
];

export default AppRoutes;

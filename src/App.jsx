import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Write from "./pages/Write";
import Single from "./pages/Single.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      <Footer />
    </div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

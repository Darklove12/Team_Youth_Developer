import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import CategoryProducts from './pages/CategoryProducts'
import Products from './pages/Products'
import Layout from './pages/Layout'
import NewArrivals from "./components/NewArrivals";
import Ladies from "./components/Ladies";
import Men from "./components/Men";
import Promos from "./components/Promos";
import Giftcard from "./components/Giftcard";
import Login from "./components/Login";
import CardInfo from "./components/CardInfo";
import Viewinfro from "./pages/ViewInfro";




const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card/:name",
        element: <Viewinfro />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/category/:id",
        element: <CategoryProducts />,
      },
      {
        path: "newarrivals/",
        element: <NewArrivals/>,
      },

      {
        path: "/list/:name",
        element: <CardInfo/>,
      },
      {
        path: "ladies",
        element: <Ladies/>,
      },
      {
        path: "men/",
        element: <Men/>,
      },
      {
        path: "promos",
        element: <Promos/>,
      },
      {
        path: "giftcard",
        element: <Giftcard/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "/card/:name",
        element: <CardInfo/>,
      },
      
    ],
  },
]);

export default router;

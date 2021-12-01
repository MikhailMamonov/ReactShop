import AdminPage from "../pages/AdminPage";
import CatalogPage from "../pages/CatalogPage";
//import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShoppingCartPage from "./../pages/ShoppingCartPage";

export const privateRoutes = [
  { path: "/home", exact: false, component: HomePage },
  { path: "/catalog", exact: false, component: CatalogPage },
  { path: "/admin", exact: false, component: AdminPage },
  { path: "/shopping-cart", exact: false, component: ShoppingCartPage },

  // {  path:"/error", exact: false,  component:ErrorPage},
];

export const publicRoutes = [
  { path: "/login", exact: false, component: LoginPage },
  { path: "/register", exact: false, component: RegisterPage },
];

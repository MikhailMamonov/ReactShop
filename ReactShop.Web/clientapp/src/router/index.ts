import AdminPage from "../pages/AdminPage";
import CatalogPage from "../pages/CatalogPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShoppingCartPage from "./../pages/ShoppingCartPage";

export const privateRoutes = [
  { path: "/home", exact: false, component: HomePage },
  { path: "/catalog", exact: false, component: CatalogPage },
  { path: "/admin", exact: false, component: AdminPage },
  { path: "/shopping-cart", exact: false, component: ShoppingCartPage },
];

export const publicRoutes = [
  { path: "/login", exact: false, component: LoginPage },
  { path: "/register", exact: false, component: RegisterPage },
];

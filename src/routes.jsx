import { createBrowserRouter } from "react-router";
import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/Auth/Login.jsx";
import RegisterPage from "./pages/Auth/Register.jsx";
import ProfilePage from './pages/Auth/Profile.jsx';

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage  /> },
  { path: "/register", element: <RegisterPage  /> },
  { path: "/profile", element: <ProfilePage  /> },
]);

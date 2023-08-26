import { Routes, Route } from "react-router-dom";
// import AuthPage from "screens/authPage/AuthPage";
import HomePage from "screens/homePage/HomePage";
import WelcomePage from "screens/welcomePage/WelcomePage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/authOperations";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
  <b>Refreshing user...</b>
  ):(
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      {/* <Route path="/auth/:id" element={<AuthPage />} /> */}
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

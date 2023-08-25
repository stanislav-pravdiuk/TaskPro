import { Routes, Route } from "react-router-dom";
// import AuthPage from "screens/authPage/AuthPage";
import HomePage from "screens/homePage/HomePage";
import WelcomePage from "screens/welcomePage/WelcomePage";
import LoginForm from "./loginForm/LoginForm";
import RegisterForm from "./registeForm/RegisterForm";

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      {/* <Route path="/auth/:id" element={<AuthPage />} /> */}
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

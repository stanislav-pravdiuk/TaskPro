import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/authOperations";
import { PrivateRoute } from "../privateRoute/PrivateRoute";
import { RestrictedRoute } from "restrictedRoute/RestrictedRoute";


const HomePage = lazy(() => import("screens/homePage/HomePage"));
const WelcomePage = lazy(() => import("../screens/welcomePage/WelcomePage"));
const LoginForm = lazy(() => import("./loginForm/LoginForm"));
const RegisterForm = lazy(() => import("./registerForm/RegisterForm"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<b>Загрузка...</b>}>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route index element={<RestrictedRoute component={<WelcomePage />} redirectTo="/home" />} />
            <Route path="/auth/login"
              element={<RestrictedRoute component={<LoginForm />} redirectTo="/home" />}
            />
            <Route path="/auth/register"
              element={<RestrictedRoute component={<RegisterForm />} redirectTo="/home" />}
            />
            <Route path="/home"
              element={<PrivateRoute component={<HomePage />} redirectTo="/auth/login" />}
            />
        </Routes>
      )}
    </Suspense>
  );
};
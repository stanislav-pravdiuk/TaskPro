import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { RestrictedRoute } from 'restrictedRoute/RestrictedRoute';
import Layout from './layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 'components/Theme/theme';

const HomePage = lazy(() => import('screens/homePage/HomePage'));
const WelcomePage = lazy(() => import('../screens/welcomePage/WelcomePage'));
const LoginForm = lazy(() => import('./loginForm/LoginForm'));
const RegisterForm = lazy(() => import('./registerForm/RegisterForm'));
const ScrensPage = lazy(() => import('../components/ScreensPage/ScreensPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const themeMap = {
    light: theme.light,
    dark: theme.dark,
    violet: theme.violet
  }; 

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  return (
    <ThemeProvider theme={themeMap[currentTheme]} handleThemeChange={handleThemeChange}>
      <CssBaseline />
      <Suspense fallback={<b>Загрузка...</b>}>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <>
          <Toaster />
          <Routes>
            <Route
              index
              element={
                <RestrictedRoute
                  component={<WelcomePage />}
                  redirectTo="/home"
                />
              }
            />
            <Route
              path="/auth/login"
              element={
                <RestrictedRoute component={<LoginForm />} redirectTo="/home" />
              }
            />
            <Route
              path="/auth/register"
              element={
                <RestrictedRoute
                  component={<RegisterForm />}
                  redirectTo="/home"
                />
              }
            />
            <Route
              path="/home"
              element={
                <Layout>
                  <PrivateRoute
                    component={<HomePage />}
                    redirectTo="/auth/login"
                  />
                </Layout>
              }
            />
            <Route
              path="/home/:boardName"
              element={
                <Layout>
                  <PrivateRoute
                    component={<ScrensPage />}
                    redirectTo="/auth/login"
                  />
                </Layout>
              }
            />
          </Routes>
        </>
      )}
    </Suspense>
    </ThemeProvider>
  );
};

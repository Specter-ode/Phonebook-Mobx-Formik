import { Navigate, Outlet } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/auth/auth-selector';
import { authStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';

const PublicRoute = observer(() => {
  const isToken = authStore.token;
  return <>{isToken ? <Navigate to="/contacts" /> : <Outlet />}</>;
});

// Второй вариант маршрута ----->>>
// const PublicRoute = ({children, restricted=false, ...routeProps,}) => {
//   const isToken = useSelector(getToken);
//   const shouldRedirect = isToken && restricted;
//   return (
//   <Route {...routeProps}>
//     {shouldRedirect ? <Redirect to="/contacts" : children />}
//   </Route>)
// };

// в App ----->>>
// <PublicRoute path="/>" >
// <HomePage />
// </PublicRoute>
// <PublicRoute path="/contacts>" restricted>
// <RegisterPage />
// </PublicRoute>
// <PublicRoute path="/contacts>" restricted>
// <LoginPage />
// </PublicRoute>

export default PublicRoute;

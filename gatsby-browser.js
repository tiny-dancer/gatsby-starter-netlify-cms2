exports.onRouteUpdate = ({ location }) => {
  if (location.pathname === "/") location.pathname = "/landing";
};

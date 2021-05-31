// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  // exact: true/false | default true
  // type: public/private | default public | private for logged in user pages
];

export default routes;

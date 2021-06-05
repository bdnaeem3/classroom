// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Lesson from "../pages/Lesson";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    type: 'private'
  },
  {
    path: "/lesson",
    component: Lesson,
    type: 'private'
  },
  // exact: true/false | default true
  // type: public/private | default public | private for logged in user pages
];

export default routes;

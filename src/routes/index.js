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
    bg: `URL('/images/login.jpg')no-repeat top center/cover`
  },
  {
    path: "/lesson",
    component: Lesson,
    type: 'private',
    bg: '#1d4354'
  },
  // exact: true/false | default true
  // type: public/private | default public | private for logged in user pages
];

export default routes;

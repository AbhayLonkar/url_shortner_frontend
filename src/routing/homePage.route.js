import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import UrlForm from "../components/UrlForm"
import HomePage from "../pages/HomePage.jsx";


export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})
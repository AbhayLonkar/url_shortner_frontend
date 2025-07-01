import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import UrlForm from "../components/UrlForm"


export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: UrlForm
})
import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashBoard from "../pages/DashBoard"


export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashBoard
})
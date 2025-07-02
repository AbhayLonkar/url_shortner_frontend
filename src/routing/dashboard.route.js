import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashBoard from "../pages/DashBoard"
import { checkAuth } from "../utils/helper"


export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashBoard,
  beforeLoad: checkAuth,
})
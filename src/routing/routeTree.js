import {createRootRoute,} from '@tanstack/react-router'
import App from "../App"
import {homePageRoute} from './homepage.route'
import {authRoute} from './auth.route.'
import {dashboardRoute} from './dashboard.route'
import {notFoundRoute} from "./notFound.route.js";

export const rootRoute = createRootRoute({
    component: App,
})

export const routeTree = rootRoute.addChildren([homePageRoute, authRoute, dashboardRoute, notFoundRoute])

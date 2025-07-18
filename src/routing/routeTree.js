import {createRootRoute,} from '@tanstack/react-router'
import App from "../App"
import {homePageRoute} from './homePage.route.js'
import {authRoute} from './auth.route.js'
import {dashboardRoute} from './dashboard.route.js'
import NotFoundPage from "../pages/NotFoundPage.jsx";

export const rootRoute = createRootRoute({
    component: App,
    notFoundComponent: NotFoundPage
})

export const routeTree = rootRoute.addChildren([homePageRoute, authRoute, dashboardRoute])

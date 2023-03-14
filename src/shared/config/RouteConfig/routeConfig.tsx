import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from "react-router-dom"


export enum AppRoutes{
    MAIN = 'main',
    ABOUT = 'about',
    TEST = 'test'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about',
    [AppRoutes.TEST] : '/admin/test',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <MainPage />
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }, 
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <AboutPage />
    }, 
}
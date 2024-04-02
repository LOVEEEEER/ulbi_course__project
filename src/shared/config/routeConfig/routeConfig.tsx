import { RouteObject } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteObject[] = [
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.profile, element: <ProfilePage /> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
];

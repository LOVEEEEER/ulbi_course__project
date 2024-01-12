import { RouteObject } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteObject[] = [
  { path: RoutePath.about, element: <AboutPage /> },
  { path: RoutePath.main, element: <MainPage /> },
];

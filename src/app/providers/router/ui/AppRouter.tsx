import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  const elements = useRoutes(routeConfig);
  return <Suspense fallback={<div>Loading...</div>}>{elements}</Suspense>;
};

export default AppRouter;

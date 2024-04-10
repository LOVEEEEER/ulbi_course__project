import { getUserAuthData } from "entities/User";
import { memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

function AppRouter() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return routeConfig.filter((route) => {
            if (route.authOnly && !isAuth) return false;
            return true
        })
    }, [isAuth])

    console.log(routes, isAuth)

    const elements = useRoutes(routes);
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{elements}</div>
        </Suspense>
    );
}

export default memo(AppRouter);

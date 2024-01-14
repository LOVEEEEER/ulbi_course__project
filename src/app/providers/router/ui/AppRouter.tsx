import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    const elements = useRoutes(routeConfig);
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{elements}</div>
        </Suspense>
    );
}

export default AppRouter;

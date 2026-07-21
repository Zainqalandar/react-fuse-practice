import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import Error404Page from '../main/404/Error404Page';
import SignInConfig from '../main/sign-in/SignInConfig';
import DashboardPage from '../main/dashboard/DashboardPage';

const routeConfigs = [
    SignInConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
    {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
        auth: settingsConfig.defaultAuth,
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
        auth: settingsConfig.defaultAuth,
    },
    {
        path: 'loading',
        element: <FuseLoading/>,
    },
    {
        path: '404',
        element: <Error404Page/>,
    },
    {
        path: '*',
        element: <Navigate to="404"/>,
    },
];

export default routes;

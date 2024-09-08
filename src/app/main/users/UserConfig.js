import { lazy } from 'react';
import { authRoles } from '../../auth';

const Createuser = lazy(() => import('./index'));

const taskLogsConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.userDeveloper,
    routes: [
        {
            path: 'users',
            element: <Createuser />,
        },
    ],
};

export default taskLogsConfig;
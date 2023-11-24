import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Guide from '../pages/Guide';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/day/:date",
                element: <Events/>,
            },
            {
                path: '/guide',
                element: <Guide/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default routes;
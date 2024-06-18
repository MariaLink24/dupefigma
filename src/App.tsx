import React from "react";
import { createHashRouter, RouterProvider} from 'react-router-dom';

const router = createHashRouter([
        {
            path: '/',
            element: <h1>Main Page</h1>,
        },
        {
            path: '/auth',
            element: <h1>Login page</h1>,
        },
        {
            path: '/select_room',
            element: <div/>,
        },
        {
            path: '/room',
            element: <div/>,
        },
        {
            path: '/create_room',
            element: <div/>,
        },
        {
            path: '/find_room',
            element: <div/>,
        },
        {
            path: '*',
            element: <h1>404</h1>,
        },
    ]
);



 const App = () => {
    return (<RouterProvider router={router}  />)
}
export default App;
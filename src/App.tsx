import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Room from "../pages/Room";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard/>,
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
            path: '/room/:roomId',
            element: <Room/>,
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
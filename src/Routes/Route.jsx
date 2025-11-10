import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllCrops from "../Pages/AllCrops";
import PrivateRoute from "../context/PrivateRoute";
import AddCrops from "../Pages/AddCrops";
import MyPost from "../Pages/MyPost";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/all-crops',
                element: <AllCrops />,
                loader: () => fetch('http://localhost:3000/crop')
            },
            {
                path: '/addCrop',
                element: <PrivateRoute>
                    <AddCrops />
                </PrivateRoute>
            },
            {
                path: '/my-post',
                element: <PrivateRoute>
                    <MyPost></MyPost>
                </PrivateRoute>
            }
        ]
    },
    
])
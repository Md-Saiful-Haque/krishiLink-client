import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllCrops from "../Pages/AllCrops";
import PrivateRoute from "../context/PrivateRoute";
import AddCrops from "../Pages/AddCrops";
import MyPost from "../Pages/MyPost";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";
import CropDetails from "../Pages/CropDetails";
import MyInterests from "../Pages/MyInterests";
import About from "../Pages/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('https://krishi-link-server-iota.vercel.app/latest/crop')
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
                loader: () => fetch('https://krishi-link-server-iota.vercel.app/crop')
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
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <CropDetails />,
                loader: () => fetch('https://krishi-link-server-iota.vercel.app/crop')
            },
            {
                path: '/my-interests',
                element: <PrivateRoute>
                    <MyInterests />
                </PrivateRoute>
            },
            {
                path: '/about',
                Component: About 
            }
        ]
    },
    
])
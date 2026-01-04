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
import Privacy from "../Pages/Privacy";
import Blog from "../Pages/Blog";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardOverview from "../Pages/DashboardOverview";


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
                //loader: () => fetch('https://krishi-link-server-iota.vercel.app/crop')
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
                path: '/about',
                Component: About
            },
            {
                path: '/privacy',
                Component: Privacy
            },
            {
                path: '/blog',
                Component: Blog
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            { index: true, 
                element: <DashboardOverview /> 
            },
            {
                path: 'addCrop',
                element: <AddCrops />
            },
            {
                path: 'my-post',
                element: <MyPost></MyPost>
            },
            {
                path: 'my-interests',
                element: <MyInterests />
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    }

])
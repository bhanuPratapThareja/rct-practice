import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import RootLayout from "../components/Layouts/RootLayout/RootLayout";
import ErrorLayout from "../components/Layouts/ErrorLayout/ErrorLayout";
import ErrorElement from "../components/Errors/ErrorElement";

import HomePage from "../pages/Home/Home";
import Auth from '../pages/Auth/Auth';
import AlbumsPage from '../pages/Albums/Albums';
import Cars from '../pages/Cars/Cars';
import Cars1 from '../pages/Cars/Cars1/Cars1';
import Users from '../pages/Users/Users';
import Users1 from '../pages/Users/Users1/Users1';
const AboutPage = lazy(() => import('../pages/About/About'))
const PostsPage = lazy(() => import('../pages/Posts/Posts'))
const Post = lazy(() => import('../pages/Posts/Post/Post'))
const Loader = lazy(() => import('../pages/PostsLoader/PostsLoader'))

const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorLayout><ErrorElement /></ErrorLayout>,
            children: [
                { path: '/', element: <Navigate to='/home' /> },
                { path: '/home', element: <HomePage /> },
                { path: '/auth', element: <Auth /> },
                { path: '/about', element: <AboutPage /> },
                { path: '/albums', element: <AlbumsPage /> },
                { path: '/posts', element: <PostsPage /> },
                { path: '/posts/:id', element: <Post /> },
                {
                    path: '/postsloader',
                    element: <Loader />,
                    loader: (meta) => import('../services/posts-service').then(m => m.postsLoader(meta))
                },
                { path: '/cars', element: <Cars /> },
                { path: '/cars1', element: <Cars1 /> },
                { path: '/users', element: <Users /> },
                { path: '/users1', element: <Users1 /> },
            ]
        }
    ])

    return (
        <Suspense fallback="Loading...">
            <RouterProvider router={routes} />
        </Suspense>
    )
}

export default AppRoutes
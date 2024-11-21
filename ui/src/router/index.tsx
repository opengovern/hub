import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../layout'
import NotFound from '../pages/notFound';
import Home from '../pages/landing';


const authRoutes = [
  {
    path: "/",
    element: <Home />,
    noAuth: true,
  },
  {
    key: "*",
    path: "*",
    element: <NotFound />,
    noAuth: true,
  },
];

export default function Router() {
    const navigate = useNavigate()

    const url = window.location.pathname.split('/')
  

    useEffect(() => {
        if (url[1] === 'undefined') {
            navigate('/')
        }
    }, [url])

    return (
        <Layout>
            <Routes>
                {authRoutes?.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Layout>
    )
}

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../layout'
import NotFound from '../pages/notFound';
import Home from '../pages/landing';
import Pricing from '../pages/pricing';
import Policies from '../pages/policies';
import Controls from '../pages/controls';
import ControlDetail from '../pages/controls/detail';


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
  {
    key: "pricing",
    path: "/pricing",
    element: <Pricing />,
    noAuth: true,
  },
  {
    key: "policies",
    path: "/policies",
    element: <Policies />,
    noAuth: true,
  },
  {
    key: "controls",
    path: "/controls/:framework_id",
    element: <Controls />,
    noAuth: true,
  },
  {
    key: "controlDetail",
    path: "/controls/detail/:id",
    element: <ControlDetail />,
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

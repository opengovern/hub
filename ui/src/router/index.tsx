import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../layout'
import NotFound from '../pages/notFound';
import Home from '../pages/landing';
import Pricing from '../pages/pricing';
import Policies from '../pages/policies';
import FrameworkDetail from '../pages/policies/detail';
import ControlDetail from '../pages/policies/detail/controls/detail';
import Schema from '../pages/schema';
import SchemaTables from '../pages/schema/tables';
import Preview from '../pages/preview';
import UseCase from '../pages/useCases';
import ChangeLog from '../pages/changelog';
import Setup from '../pages/setup';
import SchemaDetail from '../pages/schema/detail';


const authRoutes = [
  {
    path: "/",
    element: <Home />,
    noAuth: true,
  },
  // {
  //   path: "/preview",
  //   element: <Preview />,
  //   noAuth: true,
  // },
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
    key: "frameworks",
    path: "/compliance/frameworks",
    element: <Policies />,
    noAuth: true,
  },
  {
    key: "controls",
    path: "/compliance/frameworks/:framework_id",
    element: <FrameworkDetail />,
    noAuth: true,
  },
  {
    key: "controlDetail",
    path: "/controls/:framework_id/:id",
    element: <ControlDetail />,
    noAuth: true,
  },
  {
    key: "schmea",
    path: "/integrations",
    element: <Schema />,
    noAuth: true,
  },
  {
    key: "schmea-tables",
    path: "/integrations/:id/schema",
    element: <SchemaTables />,
    noAuth: true,
  },
  {
    key: "schmea-tables",
    path: "/integrations/:id/schema/:table_id",
    element: <SchemaTables />,
    noAuth: true,
  },
  {
    key: "use-cases",
    path: "/use-cases",
    element: <UseCase />,
    noAuth: true,
  },
  {
    key: "ChangeLog",
    path: "/changelog",
    element: <ChangeLog />,
    noAuth: true,
  },
  {
    key: "setup",
    path: "/integrations/:id/setup",
    element: <SchemaTables />,
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

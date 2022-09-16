import Home from '../pages/Home'
import Detail from '../components/Detail'
import Contact from '../components/Detail/Contact'
import Resource from '../components/Resource'
const router = [
    {
        path: '/detail',
        element: <Detail />,
        Children: [
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'resource',
        element: <Resource />
    }


]

export default router
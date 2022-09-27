import Home from '../pages/Home'
import Detail from '../components/Detail'
import ContactPage from '../pages/ContactPage'
import Resource from '../components/Resource'
const router = [
    {
        path: '/detail',
        element: <Detail />,
        Children: [
            {
                path: 'contact',
                element: <ContactPage />
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
    },
    {
        path:'/detail/contact',
        element:<ContactPage/>
    }


]

export default router
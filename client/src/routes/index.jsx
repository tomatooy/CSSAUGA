import Home from '../pages/Home'
import Detail from '../components/Detail'
import ContactPage from '../pages/ContactPage'
import Resource from '../components/Resource'
import Gallery from '../components/Gallery'
import Post from '../pages/Post'
import JoinForm from '../pages/JoinForm'
import AdminSignIn from '../pages/AdminSignIn'
import AdminMain from '../pages/AdminMain'
const router = [
    {
        path: '/detail',
        element: <Detail />,
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
    },
    {
        path:'/gallery',
        element:<Gallery />
    },
    {
        path:'/post/:postId',
        element:<Post/>
    },
    {
        path:'/joinus',
        element:<JoinForm/>
    },
    {
        path:'/admin/login',
        element:<AdminSignIn/>
    },
    {
        path:'/admin',
        element:<AdminMain/>
    }

]

export default router
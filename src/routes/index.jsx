import Home from '../components/Home'
import Detail from '../components/Detail'
import Contact from '../components/Detail/Contact'

const router = [
    {
        path: '/detail',
        element:<Detail/>,
        Children:[
            {
                path: 'contact',
                element:<Contact/>
            }
        ]
    },
    {
        path: '/',
        element:<Home/>
    }
]

export default router
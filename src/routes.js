import Home from './page/Home'
import Blog from './page/Blog'
import Article from './page/Article'

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect:'/blog',
        children: [{
            path: '/blog',
            name: 'blog',
            component: Blog,
        },{
            path: '/blog/sort/:sort',
            name: 'sort',
            component: Blog,
        },{
            path: '/blog/tag/:tag',
            name: 'tag',
            component: Blog,
        },{
            path: '/article',
            name: 'article',
            component: Article,
        }]
    },
]
export default routes 
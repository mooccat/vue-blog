import Home from './page/home'
import ArticleList from './components/ArticleList'

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: '/articleList',
            name: 'ArticleList',
            component: ArticleList,
        }]
    },
]
export default routes 
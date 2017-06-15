/**
 * 一级路由配置
 */
import mainRoutes from './main-routes';

export default [
    // ## login page
    {
        name: 'login',
        path: '/login',
        component: resolve => require(['@/pages/login'], resolve)
    },
    // ## main page
    {
        path: '/',
        meta: {requiresAuth: true},
        component: resolve => require(['@/pages/layout'], resolve),
        children: mainRoutes
    },
    // ## not fount page (404)
    {
        name: 'not-found',
        path: '*',
        component: resolve => require(['@/pages/error'], resolve)
    }
]
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名，
    alias: '/home_page',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue')
  },
  {
    // 嵌套路由,访问父路由，只显示父路由，访问子路由父子都显示
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('../views/child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  {
    // 访问main时重定向到根路由
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'home'
    // }
    redirect: to => {
      // 可以查看具体信息，在控制台,这里面可以加入控制语句
      // console.log(to)
      // return '/'
      return {
        name: 'home'
      }
    }
  }
]

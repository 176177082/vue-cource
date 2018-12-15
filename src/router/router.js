import Home from '@/views/Home.vue'
// 路由匹配有顺序，如果有重复，自上而下，先匹配到先用
export default [
  {
    path: '/',
    // 别名，
    alias: '/home_page',
    name: 'home',
    component: Home,
    // 路由函数模式传参
    props: route => ({
        food: route.query.food
      }
    )
    // 路由独享
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('这是从about来的')
    //   else alert('这不是从about来的')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于ABOUT页面'
    }
  },
  {
    // 动态路由
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true
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
  },
  {
    path: '*',
    component: () => import('../views/error_404.vue')
  }
]

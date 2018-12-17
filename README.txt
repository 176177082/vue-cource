第一课：
使用VUE-CLI3.0创建一个项目
1）使用vue ui 创建、管理项目
2）项目结构目录整理
3）初始文件添加
4）基本配置讲解
5）跨域配置

第二课 路由详解（一）---基础
1）router-link和router-view
2）路由配置
动态路由
嵌套路由
命名路由
命名视图
3）JS操作路由,编程式导航
4）重定向和别名

第三课：路由详解（二）---进阶：
1）路由组件传参
2）HTML5 History模式
3）导航守卫,组件内守卫
4）路由元信息
5）过渡效果


/**
 * 1,一个完整的导航被触发
 * 2，在失活的组件里，即将离开的组件里调用离开守卫 beforeRouteLeave
 * 3，调用全局的前置守卫 beforeEach
 * 4,在重用组件里调用 beforeRouteUpdate,新组件会调用beforeRouteEnter
 * 5，调用路由独享的守卫beforeEnter
 * 6,解析异步路由组件
 * 7，在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8,调用全局的解析守卫 beforeResolve
 * 9,导航被确认
 * 10，调用全局的后置守卫 afterEach
 * 11,触发DOM更新
 * 12，用创建好的实例调用在beforeRouteEnter守卫里传给next的回调函数
 */

第四、五、六、七课 状态管理

1） bus
2) VUEX--基础-state&getter
3) Vuex--基础-mutation&action/module
4) Vuex进阶

严格模式，插件本地化存储

vuex双向绑定


mapState还没搞懂

第八课 Ajax请求
Ajax请求
1，解决请求跨域问题
2，封装axios
   请求拦截
   响应拦截
3，请求实战

服务器端代码没有，代码不完整

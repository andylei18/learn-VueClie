/**
 * Created by dinglei on 16/3/18.
 */

export default function (router) {
  router.map({
    //默认
    '/':{
      name:'index',
      component: require('./app.vue')
    },

    //首页
    '/list':{
      name:'list',
      component: function(reslove){
        return require(['./views/list.vue'],reslove)
      }
    },


    //数据列表页面
    '/listview':{
      name:'listview',
      component: require('./views/listview.vue')
    },


    //商品详情页
    '/detail/:goodsid':{
      name:'detail',
      component: function(reslove){
        return require(['./views/detail.vue'],reslove)
      }
    },

    //购物车页
    '/cart':{
      name:'cart',
      component: require('./views/cart.vue')
    },

    //订单页
    '/order/:uid/:orderid':{
      name:'order',
      component: require('./views/order.vue')
    },

    //个人中心页
    '/user/:userid':{
      name:'user',
      component: require('./views/user.vue')
    },

    //404页
    '*': {
      name:'404error',
      component: require('./components/404.vue')
    }
  })

  //登录中间验证，页面需要登录而没有登录的情况直接跳转登录
  window.routeList=[];

  router.beforeEach((transition) => {

    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){

      router.app.effect='back';

      routeList.splice(routeList.length-1,1);

    } else {

      router.app.effect ='fade';

      routeList.push({
        name : transition.to.name,
        path : transition.to.path,
        query : transition.to.query,
        params : transition.to.params,
        timer: +new Date
      });

    }

    transition.next();

  });

  //注册路由切换后
  router.afterEach((transition) =>{
    //console.log('成功浏览到: ' + transition.to.path)
  });
}

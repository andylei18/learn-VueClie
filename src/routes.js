/**
 * Created by dinglei on 16/3/18.
 */

export default function (router) {
  router.map({
    //默认
    '/':{
      name:'index',
      component: require('./App.vue')
    },

    //购物车主页
    '/cartindex':{
      name:'cartindex',
      component: function(reslove){
        return require(['./views/cartindex.vue'],reslove)
      }
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

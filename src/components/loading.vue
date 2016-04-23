<style>
    .warn-tips {
        background: rgba(0,0,0,.7);
        -moz-border-radius: 5px;
        border-radius: 5px;
        margin: 20px 0;
        padding: 10px 10px 10px 5px;
        position:absolute;
        z-index : 5000;
        visibility:visible
    }
    .icon-load, .icon-tipwarn {
        display: inline-block;
        vertical-align: middle;
    }
    .icon-load, .icon-tipwarn {
        background-position: 0 0;
        background-repeat: no-repeat;
        width: 24px;
        height: 16px;
    }
    .icon-load {
        background-image: url(//imgcache.gtimg.cn/bossweb/jifen/mobile/images/public/icon-load.png);
        -webkit-animation: rotate .5s linear infinite;
        -webkit-transform-origin: 12px 10px;
        width: 24px;
        height: 20px;
    }


    .warn-tips p {
        color: #fff;
        font-size: 12px;
    }
    @-webkit-keyframes rotate{
        0%{-webkit-transform:rotate(0deg)}
        100%{-webkit-transform:rotate(180deg)
        }
    }

    /* 必需 */
    .loadding-transition {
        transition: all .3s ease;
        padding: 10px;
        overflow: hidden;
    }

    /* .loadding-enter 定义进入的开始状态 */
    /* .loadding-leave 定义离开的结束状态 */
    .loadding-enter, .loadding-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }
</style>
<template>

  <div>
    <section
      v-show="show"
      class="warn-tips loadding"
      :style="{left:left+'px',top:top+'px'}"
      transition="loadding"
      >
      <i class="icon-load"></i>
      <p>{{this.text==''||this.text==undefined?'加载中，请稍候...':this.text}}</p>
    </section>
  </div>

</template>
<script>

    module.exports = {
        replace:true,
        data:function(){
            return{
                left:"",
                top:""
            }
        },
        props: {
            // 显示和隐藏 默认值是隐藏
            show: {
                type: Boolean,
                default: false
            },
            text:{
                type:String
            }
        },
        ready:function(){
            var _self = this,
                bodyW = document.body.clientWidth,
                bodyH = document.body.clientHeight;

            _self.left = Math.round(bodyW / 3.1);
            _self.top = Math.round(bodyH / 2.12);
        }

    }

</script>

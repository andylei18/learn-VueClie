<style>

</style>

<template>

  <ul>
    <li v-for="item in lists"> {{item.title}}</li>
  </ul>

</template>

<script>
  import { getAjax } from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        //lists: ({lists}) => lists

        lists: function (state) {
          console.log(state)
          return state.lists
        }
      },
      actions:{
        getAjax
      }
    },
    route:{
      activate ({ next }) {
        this.getAjax()
        next()
      }
    }

  }
</script>

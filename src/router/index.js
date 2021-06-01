import Vue from 'vue'
import Router from 'vue-router'
import TesteLogica from '@/components/TesteLogica'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TesteLogica',
      component: TesteLogica
    }
  ]
})

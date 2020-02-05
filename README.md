# vue-smart-modules

This is a simple plugin for dynamic registration of modules (with internal store and routes).

## Install

With yarn:
```
yarn add vue-smart-modules
```

With npm:
```
npm i vue-smart-modules
```

Then, register VueModules in your app entry point (also register router and store in VueModules options):
```js
import Vue from 'vue'
import VueModules from 'vue-smart-modules'
import router from './router'
import store from './store'

Vue.use(VueModules, { store, router })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## Usage

Create the directory ```@/src/modules``` and create the module directory inside (```foo``` for example). Then, create ```index.js``` with following contents:

```js
import store from './store'
import routes from './routes'

export default {
  store,
  routes
}
```

Example contents of ```store.js``` (it will be namespaced store with the same name as module):
```js
export default {
  namespaced: true,
  state: {}
}
```

Example contents of ```routes.js```:
```js
import Foo from './components/Foo.vue'

export default [
  {
    path: '/foo',
    component: Foo
  }
]
```

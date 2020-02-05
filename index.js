export default {
  /**
   * install
   * @param {Vue} Vue
   * @param {object} options
   * @param {Store} options.store
   * @param {VueRouter} options.router
   */
  install (Vue, { store, router } = {}) {
    const modules = require.context('@/modules', true, /^\.\/\w+\/index\.js$/)

    modules.keys().forEach((fileName) => {
      const module = modules(fileName).default

      if (typeof module !== 'object') {
        return
      }

      // Vuex modules
      if (module.store && store) {
        const moduleName = fileName.match(/^\.\/(\w+)\/index\.js$/)[1]

        store.registerModule(moduleName, module.store)
      }

      // Routes
      if (module.routes && router) {
        router.addRoutes(module.routes)
        router.options.routes.push(...module.routes)
      }
    })
  }
}

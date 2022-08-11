const globalComponent = import.meta.glob('./*.vue')

export default {
  version: '1.0.0',
  install(app) {
    for (const [key, val] of Object.entries(globalComponent)) {
      const componentName = key.split('/')[1]
      app.component(componentName, val)
    }
  }
}

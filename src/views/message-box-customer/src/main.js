import Main from './main.vue'
import Vue from 'vue'

const MessageBoxCustomerConstructor = Vue.extend(Main)

let instance
let instances = []

const MessageBoxCustomer = function (options) {
  debugger
  options = options || {}

  options.onClose = function () {
    MessageBoxCustomer.close()
  }

  instance = new MessageBoxCustomerConstructor({data: options})
  instance.$mount()
  document.body.appendChild(instance.$el)
  Vue.$nextTick = () => {
    instance.visiblle = true
    instance.$el.style.zIndex = 3000
  }

  return instance
}

MessageBoxCustomer.close = function () {
  console.log('closed')
}

export default {
  install () {
    Vue.prototype.$messageBoxCustomer = MessageBoxCustomer
  }
}

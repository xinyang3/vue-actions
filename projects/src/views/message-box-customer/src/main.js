/**
 * @description {MessageBoxCustomer component }
 *
 *
 */


import Main from './main.vue'
import Vue from 'vue'

const MessageBoxCustomerConstructor = Vue.extend(Main)
// const duration = 1000;

let instance,
  instances = [],
  seed = 0;

/**
 * @description constructor
 * @param options {{title: '', message: '', duration: 3000, onClose: function}}
 * @returns {any}
 * @constructor
 */
const MessageBoxCustomer = function (options) {
  options = options || {}
  const userOnClose = options.onClose || function () {};
  const userOnConfirm = options.confirm || function () {};

  const id = 'msgBoxCustomer_' + seed++;
  const duration = options.duration || 5000;

  options.onClose = function () {
    MessageBoxCustomer.close(id, userOnClose)
  }
  options.confirm = function () {
    userOnConfirm();
    options.onClose();
    // console.log('MessageBoxCustomer is called');
  }

  instance = new MessageBoxCustomerConstructor({data: options})
  instance.$mount()
  document.body.appendChild(instance.$el);

  instance.visible = true;
  instance.id = id;
  instance.$nextTick(() => {
    // todo mounted之后元素还未挂载成功
    instance.$el.style.zIndex = 3000;
  });
  MessageBoxCustomer.closeAll();
  instances.push(instance);
  // MessageBoxCustomer.closeTimeOut(duration, id, userOnClose);
  return instance
}

/**
 * @description close current messageBox instance
 * @param id
 * @param userOnClose
 */
MessageBoxCustomer.close = function (id, userOnClose) {
  let index = -1;
  // const len = instances.length;
  const instance = instances.filter((instance, i) => {
    if (instance.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];
  if (!instance) return;

  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }
  instance.visible = false;
  instances.splice(index, 1);
}

/**
 * @description 超时自动移除
 * @param duration {duration || 5000}
 * @param id
 * @param userOnClose
 */
MessageBoxCustomer.closeTimeOut = function (duration, id, userOnClose) {
  let _this = this;
  _this.timing = setTimeout(function () {
    _this.close(id, userOnClose);
    _this.destroy();
  }, duration);
}

MessageBoxCustomer.destroy = function () {
  if (this.timing) {
    this.timing = null;
  }
}

MessageBoxCustomer.closeAll = function () {
  if (instances.length < 1) return;
  instances.map(item => {
    item.visible = false;
  });
  instances = [];
};



export default {
  install () {
    Vue.prototype.$messageBoxCustomer = MessageBoxCustomer
  }
}

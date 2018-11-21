import Vue from 'Vue';

export default function () {
	var m = Vue.directive('lang', function (el, binding) {
		console.log(el.style);
		console.log(binding);
		el.style = 'color:' + binding.value;
	});

	 Vue.directive('lang1', { //五个注册指令的钩子函数
        bind: function() { //被绑定
            console.log('1 - bind');
        },
        inserted: function() { //绑定到节点
            console.log('2 - inserted');
        },
        update: function() { //组件更新
            console.log('3 - update');
        },
        componentUpdated: function() { //组件更新完成
            console.log('4 - componentUpdated');
        },
        unbind: function() { //解绑
            console.log('5 - bind');
        }
    })
     console.log(m)
}
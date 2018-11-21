<template>
	<div class="container">
		<div id="demo">
		  <button v-on:click="show = !show">
		    Toggle
		  </button>
		  <transition name="fade">
		    <p v-if="show">hello</p>
		  </transition>
		</div>
		<div id="example-2">
		  <button @click="show2 = !show2">Toggle show</button>
		  <transition name="bounce">
		    <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		  </transition>
		</div>


		<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

		<div id="example-3">
		  <button @click="show3 = !show3">
		    Toggle render
		  </button>
		  <transition
		    name="custom-classes-transition"
		    enter-active-class="animated tada"
		    leave-active-class="animated bounceOutRight"
		  >
		    <p v-if="show3">hello</p>
		  </transition>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'animateTest',
		data () {
			return {
				show: true,
				show2: true,
				show3: true
			}
		}
	}
</script>
<style lang="stylus">
// demo
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// example-2
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
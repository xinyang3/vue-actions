<template>
	<div id="directiveTest">
		<div v-lang="color">{{num}}</div>
		<p>
			<button @click="add">add</button>
		</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'customer-directive',
		data: function () {
			return {
				num: 0,
				color: 'red'
			};
		},
		methods: {
			add: function () {
				var colors = ['red','orange','yellow','green','blue','black'];
				this.color = colors[Math.round(Math.random() * colors.length)]
				this.num ++;
			}
		}

	}
</script>
<style type="text/css"></style>
<template>
	<div class="container">
		<transition>
			<table v-if="items.length > 0" >
				<tr v-for="item in items" :key="item.name">
					<td>{{item.name }}</td>
				</tr>
			</table>
			<p v-else>
				sorry no items found.
			</p>
		</transition>
		<input @keydown.enter="enter" class="enter" />
		<div @mouseover="enter">mouseover</div>

	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'transitionTest2',
		data () {
			return {
				items: [
				{
					name: 'asha'
				},{
					name: 'lita'
				}
				]
			};
		},
		beforeCreate: function () {
			console.log(this.$router);
		},
		methods: {
			enter: function(){
				console.log(arguments);	
			}
		}
	}
</script>
<style type="text/css">
	.container {
		width: 100%;
		min-height: 500px; 
	}
	.enter {
		width: 200px;
		height: 50px;
	}


</style>
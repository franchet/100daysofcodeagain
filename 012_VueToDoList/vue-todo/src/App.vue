<template>
	<div id="app">
		<Header />
		<Todos :todos="todos" />
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Todos from './components/Todos.vue'


	let todos = [
		{
			id:"1",
			name: "Record Video",
			done: "false"
			},
			{
				id: "2",
				name: "Upload Video",
				done: "false"
				},
				{
					id: "3",
					name: "Party...",
					done: "false"
					},
				{
					id: "4",
					name: "Debug",
					done: "false"
				},
				{
					id: "5",
					name: "More Debug",
					done: "false"
				}
					];


export default {
	name: 'app',
	components: {
		Header, Todos
	},
	data: function () {
		return {
			todos: todos
		}
	}
}

</script>


<style lang="scss">
body {
	margin: 0;
	padding: 0;
	background-color: #f3f3f3;

	font-family: Arial, Helvetica, sans-serif;
}
</style>

<template>
	<div id="app">
		<header title="VueJS">
			<Profile :user="user"/>
	</div>
</template>

<script>
import Header from './components/header';
import Profile from './components/Profile';


export default {
	name: 'app',
	components: {
		Header, 
		Profile
	},

	data: function () {
		return user; {
			name: "Peter Parker";
			image: require('./assets/spider-man.jpg');
			}
	}
}
</script>

<style>

body {
	margin: 0;
	background: #f3f3f3;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>

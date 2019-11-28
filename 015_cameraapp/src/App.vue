<template>
	<div id="app">
		<Camera />
	</div>
</template>

<script>
import Camera from './components/Camera'

export default {
	name: 'app',
	components: {
		Camera
	}
}
</script>

<style lang="scss">
#body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: f3f3f3;

}
</style>

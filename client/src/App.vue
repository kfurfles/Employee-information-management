<template>
	<div id="app">
		<message/>
		<router-container/>
	</div>
</template>

<script>
import Message from '@/components/globals/message'
import RouterContainer from '@/containers/router-view'
export default {
	name: 'App',
	components:{
		Message,
		'router-container': RouterContainer
	}
}
</script>

<style lang="scss">
@import '~bootstrap-vue/src/index.scss';
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

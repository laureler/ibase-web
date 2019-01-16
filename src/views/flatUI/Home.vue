<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/TSInVue">TSInVue</router-link> |
      <router-link to="/AxiosInVue">AxiosInVue</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// @ is an alias to /src
import Layout from '@/template/HomeTemplate.vue'


@Component({
	components: {
		Layout
	}
})
export default class Home extends Vue {}
</script>

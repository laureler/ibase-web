<template>
  <div class="home">
    <HomeTemplate></HomeTemplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// @ is an alias to /src
import HomeTemplate from '@/template/HomeTemplate.vue'


@Component({
	components: {
		HomeTemplate
	}
})
export default class Home extends Vue {}
</script>

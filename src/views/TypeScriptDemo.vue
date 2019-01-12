<template>
  <div class="home">
    <TSInVue propMessage="typeScript"></TSInVue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TSInVue from '@/components/TSInVue.vue' // @ is an alias to /src

@Component({
	components: {
		TSInVue
	}
})
export default class Home extends Vue {}
</script>

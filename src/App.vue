<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>

</template>

<style></style>

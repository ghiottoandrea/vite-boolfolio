<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
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
  <h1>Home Page</h1>
  <ProjectCard />

</template>

<style></style>

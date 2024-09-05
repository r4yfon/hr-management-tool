<script setup>
import ProfilesList from "./components/ProfilesList.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
    <!-- <ProfilesList /> -->
  </main>
</template>

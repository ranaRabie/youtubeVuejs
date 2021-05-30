<template>
  <div id="main-wrapper">
    <Header />
    <main id="content-wrapper">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>

<template>
  <div class="home">
    <div class="left">
      <nav-bar></nav-bar>
    </div>
    <div class="right">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>

.home {
  display: flex;
}

.left {
  background-color: #106A5D;
  height: 100vh;
  width: 220px;
  overflow: hidden;
}

.right{
  flex-flow: column;
  width: calc(100vw - 220px);
  height: 100vh;
}

</style>

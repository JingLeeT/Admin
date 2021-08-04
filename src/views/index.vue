<template>
  <div>
    <div class="top">
      <router-link
          v-for="(i,index) of title"
          :key="index"
          :to="i.redirect? i.redirect : i.path">
        {{ i.meta.title }}
        <span v-if="index !== title.length - 1"> > </span>
      </router-link>
      <span class="login-out">登出</span>
    </div>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: null
    }
  },
  watch: {
    $route: function () {
      this.title = this.$route.matched
    }
  },
  mounted() {
    let title = []
    for (let i = 0; i < this.$route.matched.length; i++) {
      title[i] = this.$route.matched[i]
    }
    this.title = title
  }
}
</script>

<style scoped>

.top {
  position: relative;
  width: 100%;
  height: 54px;
  line-height: 54px;
  border-bottom: 2px solid #106A5D;
}

.top a {
  color: #666666;
  padding-left: 10px;
  text-decoration: none;
}

.top span {
  color: #106A5D;
}

.top .login-out {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  top: 7px;
  right: 10px;
  color: #fff;
  background-color: #106A5D;
  border: 1px solid #106A5D;
  border-radius: 4px;
}

.top .login-out:hover {
  opacity: 0.7;
}

.bottom {
  width: 100%;
  height: calc(100vh - 62px);
  overflow: auto;
}

</style>

<template>
  <div class="nav-bar">
    <el-menu
        router
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        background-color="#106A5D"
        text-color="#000"
        active-text-color="#fff">
      <div v-for="item of navList" :key="item.meta.title">
        <el-submenu v-if="item.children.length > 1" :index="item.redirect">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item v-for="i of item.children" :key="i.meta.title" :index="i.path">
            {{ i.meta.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.redirect">
            <i :class="item.meta.icon"></i>
            <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      defaultActive: '',
      navList: '',
    };
  },
  watch: {
    $route: function () {
      this.defaultActive = this.$route.matched[1].redirect
    }
  },
  mounted() {
    this.defaultActive = this.$route.matched[1].redirect
    this.navList = this.$router.options.routes.filter(item => item.name === 'Home')[0].children
  },
  methods: {
    handleOpen(key) {
      if(this.$route.path !== key) {
        this.$router.push(key)
      }
    }
  }
}

</script>

<style scoped>

.nav-bar {
  width: 220px;
}

.el-menu-vertical-demo span {
  font-size: 17px;
}

</style>

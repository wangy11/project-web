<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <img src="" alt="无法显示图片" /></div
        ></el-col>
        <el-col :span="18" class="middle">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <a class="loginout" @click="handleSignout" href="#">退出</a>
          </div></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <!-- 开启路由模式 -->
        <el-menu :unique-opened="true" :router="true">
          <el-submenu
            :index="'' + item1.order"
            v-for="(item1, index) in menus"
            :key="index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item1.authName }}</span>
            </template>
            <el-menu-item
              :index="item2.path"
              v-for="(item2, index) in item1.children"
              :key="index"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item2.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      Url: require("@/assets/login-step1-left.png"),
      menus: [],
    };
  },
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  created() {
    this.getMenus();
  },
  methods: {
    //获取导航
    async getMenus() {
      const res = await this.$http.get(`menus`);
      this.menus = res.data.data;
    },
    handleSignout() {
      //清除token
      localStorage.clear();
      this.$message.success("退出成功");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #bfa;
}
.aside {
  background-color: skyblue;
}
.main {
  background-color: orange;
}
.middle {
  text-align: center;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
</style>
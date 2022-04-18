<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ leavl1 }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ leavl2 }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "my-bread",
  props: ["leavl1", "leavl2"],
};
</script>

<style>
</style>
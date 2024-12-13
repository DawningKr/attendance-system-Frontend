<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header msg="大学生考勤管理系统"></Header>
  <router-view></router-view>
</template>

<style scoped>
.menu {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 25%;
  width: 100%;
  height: 20%;
}
</style>

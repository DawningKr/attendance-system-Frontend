<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <Header msg="大学生考勤管理系统"></Header>
  </div>
  <div class="menu">
    <nav>
      <ul>
        <li><router-link to="/">菜单</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- 渲染匹配到的组件 -->
  </div>

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
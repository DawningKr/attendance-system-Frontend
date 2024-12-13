<script setup></script>

<template>
  <div>
    <div class="menu">
      <nav>
        <ul>
          <li><router-link to="/add">现在考勤</router-link></li>
          <li><router-link to="/table">查询所有考勤记录</router-link></li>
          <li><router-link to="/idSearch">按学号查询</router-link></li>
          <li><router-link to="/dateSearch">按日期查询</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
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

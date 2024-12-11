<template>
    <div>
    <nav>
      <ul>
        <li>
            <router-link to="/present">查询</router-link>
            <router-link to="/helloworld">你好</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>  <!-- 渲染匹配到的组件 -->
  </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Home 组件的样式 */
  </style>
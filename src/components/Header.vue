<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="header">{{ msg }}</div>
</template>

<style scoped>
.header {
  font-size: 30px;
  background-color: #646cffaa;
  color: #000;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import Info from "./Info.vue";
const route = useRoute();
const router = useRouter();
const attendanceId = route.params.id;
const info = ref({});

axios
  .get("http://localhost:8080/attendance/select/id/" + attendanceId)
  .then((response) => {
    info.value = response.data.data;
  })
  .catch((error) => {
    console.log(error);
  });

const confirm = () => {
  axios
    .delete("http://localhost:8080/attendance/delete/" + attendanceId)
    .catch((error) => {
      console.log(error);
    });
  router.push("/");
};
</script>

<template>
  <div class="form-container">
    <div class="form">
      <div class="input-part">
        <Info :info="info"></Info>
        <h5>是否确认删除考勤信息？</h5>
      </div>
      <div class="submit-part">
        <el-button type="danger" @click="confirm"> Confirm </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 1000px;
  height: 600px;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.form {
  background-color: orange;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input-part {
  background-color: orange;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}

.submit-part {
  margin-top: 10px;
}
</style>

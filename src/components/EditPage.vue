<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Info from "./Info.vue";

const route = useRoute();
const router = useRouter();
const attendanceId = route.params.id;
const info = ref({});

const formData = reactive({
  studentId: null,
  studentName: null,
  studentSection: null,
  attendanceStatus: null,
  attendanceId: attendanceId,
  attendanceTime: null,
});

axios
  .get("http://localhost:8080/attendance/select/id/" + attendanceId)
  .then((response) => {
    info.value = response.data.data;
  })
  .catch((error) => {
    console.log(error);
  });

const options = [
  {
    value: "出勤√",
    label: "出勤√",
  },
  {
    value: "旷课X",
    label: "旷课X",
  },
  {
    value: "事假△",
    label: "事假△",
  },
  {
    value: "病假○",
    label: "病假○",
  },
  {
    value: "迟到+",
    label: "迟到+",
  },
  {
    value: "早退–",
    label: "早退–",
  },
];
const submit = () => {
  axios
    .put("http://localhost:8080/attendance/update", formData)
    .then((response) => {
      if (response.data.data === null) {
        alert(response.data.msg);
      }
    })
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
        <h5>修改考勤状态</h5>
        <el-select
          v-model="formData.attendanceStatus"
          class="m-2"
          placeholder="选择考勤状态"
          style="width: 500px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="submit-part">
        <el-button type="primary" @click="submit"> Submit </el-button>
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
  margin-top: 40px;
}
</style>

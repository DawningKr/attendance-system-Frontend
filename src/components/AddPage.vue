<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ElMessage } from "element-plus";

const router = useRouter();
const formData = reactive({
  studentId: null,
  studentName: null,
  studentSection: null,
  attendanceStatus: null,
  attendanceId: null,
  attendanceTime: null,
});

const formRef = ref(null);

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

const rules = {
  studentId: [{ required: true, message: "学生学号不能为空", trigger: "blur" }],
  studentName: [
    { required: true, message: "学生姓名不能为空", trigger: "blur" },
  ],
  studentSection: [
    { required: true, message: "学生班级不能为空", trigger: "blur" },
  ],
  attendanceStatus: [
    { required: true, message: "考勤状态不能为空", trigger: "change" },
  ],
};

const confirm = (formRef) => {
  if (!formRef) {
    ElMessage.error("你还没有填写表单");
    return;
  }
  formRef.validate((valid) => {
    if (valid) {
      axios
        .post("http://localhost:8080/attendance/add", formData)
        .then(() => {
          ElMessage.success("提交成功");
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ElMessage.error("请填写完整表单");
    }
  });
};
</script>

<template>
  <div>
    <div class="container">
      <div class="form-part">
        <el-form
          label-width="100px"
          :model="formData"
          ref="formRef"
          :rules="rules"
          style="max-width: 460px"
        >
          <el-form-item label="学生学号">
            <el-input v-model="formData.studentId" />
          </el-form-item>
          <el-form-item label="学生姓名">
            <el-input v-model="formData.studentName" />
          </el-form-item>
          <el-form-item label="学生班级">
            <el-input v-model="formData.studentSection" />
          </el-form-item>
          <el-select
            v-model="formData.attendanceStatus"
            class="m-2"
            placeholder="选择考勤状态"
            style="width: 300px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form>
      </div>
      <div class="submit-part">
        <h5>是否现在考勤？</h5>
        <el-button type="primary" @click="confirm(formRef)">Confirm</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1000px;
  height: 600px;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}

.form-part {
  width: 500px;
  height: 300px;
  background-color: greenyellow;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-part {
  width: 500px;
  height: 120px;
  background-color: aqua;
  border-radius: 10px;
}
</style>

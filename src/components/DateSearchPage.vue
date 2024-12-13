<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ElMessage } from "element-plus";

const router = useRouter();
const date = ref("");

const tableData = ref([]);

const search = () => {
  if (date.value === "") {
    ElMessage.error("您还未输入，请重试！");
    return;
  }
  axios
    .get(
      "http://localhost:8080/attendance/select/date/" + date.value.toString()
    )
    .then((response) => {
      const info = response.data;
      if (info.isSucceed == false) {
        ElMessage.error(info.msg);
        return
      }
      if (info.data.length == 0) {
        ElMessage.info("未查询到结果");
      }
      tableData.value = info.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const edit = (id) => {
  router.push({ name: "editPage", params: { id } });
};

const remove = (id) => {
  router.push({ name: "deletePage", params: { id } });
};
</script>

<template>
  <div>
    <div class="container">
      <div class="form-part">
        <h5>请输入日期(格式为“yyyy-MM-dd”)</h5>
        <el-input
          v-model="date"
          style="width: 240px"
          placeholder="请输入日期"
        />
      </div>
      <div class="submit-part">
        <el-button type="primary" size="large" @click="search"
          >Search</el-button
        >
      </div>
      <div v-if="tableData.length > 0">
        <div class="result">
          <el-table :data="tableData">
            <el-table-column
              sortable
              prop="studentId"
              label="学号"
              width="120"
            />
            <el-table-column
              sortable
              prop="studentName"
              label="姓名"
              width="80"
            />
            <el-table-column
              sortable
              prop="studentSection"
              label="班级"
              width="120"
            />
            <el-table-column
              sortable
              prop="attendanceTime"
              label="考勤时间"
              width="180"
            />
            <el-table-column
              prop="attendanceStatus"
              label="考勤状态"
              width="120"
            >
              <template #default="scope">
                <el-tag disable-transitions
                  >{{ scope.row.attendanceStatus }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="options" width="120">
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="edit(scope.row.attendanceId)"
                  >Edit</el-button
                >
                <el-button
                  link
                  type="danger"
                  size="small"
                  @click="remove(scope.row.attendanceId)"
                  >Delete</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
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
  height: 150px;
  background-color: greenyellow;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.submit-part {
  width: 500px;
  height: 80px;
  background-color: aqua;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.result {
  background-color: yellow;
  overflow-y: auto;
}
</style>

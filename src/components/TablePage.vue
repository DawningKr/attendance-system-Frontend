<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const tableData = ref([]);
const router = useRouter();
axios
  .get("http://localhost:8080/attendance/select/all")
  .then((response) => {
    tableData.value = response.data.data;
  })
  .catch((error) => {
    console.log(error);
  });

const filterTag = (value, row) => {
  return row.attendanceStatus === value;
};

const edit = (id) => {
  router.push({ name: "editPage", params: { id } });
};

const remove = (id) => {
  router.push({ name: "deletePage", params: { id } });
};
</script>

<template>
  <div class="table-container">
    <el-table :data="tableData">
      <el-table-column sortable prop="studentId" label="学号" width="120" />
      <el-table-column sortable prop="studentName" label="姓名" width="120" />
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
        width="200"
      />
      <el-table-column
        prop="attendanceStatus"
        label="考勤状态"
        width="120"
        :filters="[
          { text: '出勤√', value: '出勤√' },
          { text: '旷课X', value: '旷课X' },
          { text: '事假△', value: '事假△' },
          { text: '病假○', value: '病假○' },
          { text: '迟到+', value: '迟到+' },
          { text: '早退–', value: '早退–' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template #default="scope">
          <el-tag disable-transitions>{{ scope.row.attendanceStatus }} </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="options" width="140">
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
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
}

.table-container {
  height: 600px;
  overflow-y: auto;
}
</style>

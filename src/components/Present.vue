<script setup>

const handleClick = () => {
    console.log('click')
}


const tableData = [
    {
        stu_id: '1',
        stu_name: 'Tom',
        stu_class: '18',
        attendance_id: 'A',
        time: '05-03',
        status: '旷课×'

    },
    {
        stu_id: '1',
        stu_name: 'Tom',
        stu_class: '18',
        attendance_id: 'A',
        time: '05-03',
        status: '出勤√'
    },
]

const filterTag = (value, row) => {
    return row.status.includes(value)
}
</script>

<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="stu_id" label="学号" width="120" />
        <el-table-column prop="stu_name" label="姓名" width="120" />
        <el-table-column prop="stu_class" label="班级" width="120" />
        <el-table-column prop="attendance_id" label="考勤编号" width="120" />
        <el-table-column prop="time" label="考勤时间" width="250" />
        <el-table-column prop="status" label="考勤状态" width="120" :filters="[
            { text: '出勤√', value: '出勤√' },
            { text: '旷课X', value: '旷课X' },
            { text: '事假△', value: '事假△' },
            { text: '病假○', value: '病假○' },
            { text: '迟到+', value: '迟到+' },
            { text: '早退–', value: '早退–' },
        ]" :filter-method="filterTag" filter-placement="bottom-end">
            <template #default="scope">
                <el-tag disable-transitions>{{ scope.row.status }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column label="options" width="300">
            <template #default>
                <el-button link type="primary" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
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
</style>
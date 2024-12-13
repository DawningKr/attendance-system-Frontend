<script setup>
const props = defineProps({
    info: {
        type: Object,
        required: true, 
        default: () => ({
            studentName: null,
            studentId: null,
            studentSection: null,
            attendanceStatus: null
        })
    }
})
</script>

<template>
    <div>
        <el-descriptions title="学生信息" style="width: 500px;">
            <el-descriptions-item label="姓名">{{ props.info.studentName }}</el-descriptions-item>
            <el-descriptions-item label="学号">{{ props.info.studentId }}</el-descriptions-item>
            <el-descriptions-item label="班级">{{ props.info.studentSection }}</el-descriptions-item>
            <el-descriptions-item label=" 当前考勤状态">
                <el-tag size="small">{{ props.info.attendanceStatus }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="考勤时间">{{ props.info.attendanceTime }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<style scoped>
</style>
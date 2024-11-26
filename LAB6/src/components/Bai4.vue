<template>
    <div>
        <form @submit.prevent="submitForm" class="col-sm-4">
            <h3>Thêm học sinh</h3>
            <div class="mb-3 mt-3">
                <label for="name">Họ và tên:</label>
                <input type="text" class="form-control" id="name" v-model="student.name" required>
            </div>
            <div class="mb-3">
                <label for="score">Điểm:</label>
                <input type="number" class="form-control" id="score" v-model="student.score" min="0" max="10" required>
            </div>
            <div>
                <label for="dob">Ngày sinh:</label>
                <input type="date" class="form-control" id="dob" v-model="student.dob" required>
            </div>

            <button type="submit" class="btn btn-primary mt-3">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
        </form>
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Họ và tên</th>
                    <th>Điểm</th>
                    <th>Ngày sinh</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stu,index) in students" :key="index">
                    <td>{{ stu.name }}</td>
                    <td>{{ stu.score }}</td>
                    <td>{{ stu.dob }}</td>
                    <td>
                        <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    

</template>

<script setup>
    import { ref } from 'vue';

    // Dữ liêu mẫu
    const students = ref([
        {name:'Võ Văn Quang Huy', score: 10, dob: '2000-01-01'},
        {name:'Nguyễn Văn A', score: 9, dob: '2000-01-02'},
        {name:'Trần Thị B', score: 8, dob: '2000-01-03'},
    ])

    // biến quản lý trạng thái form
    const student = ref({
        name: '',
        score: null,
        dob: ''
    })

    let isEditing = ref(false);
    let editingIndex = ref(null);

    function submitForm() {
        if (isEditing.value) {
            students.value[editingIndex.value] = {...student.value};
            isEditing.value = false;
            editingIndex.value = null;
        } else {
            students.value.push({...student.value});
        }
        resetForm();
        
    }

    function resetForm(){
        student.value = {
            name: '',
            score: null,
            dob: ''
        }
    }

    function editStudent(index){
        student.value = {...students.value[index]};
        isEditing.value = true;
        editingIndex.value = index;
    }
    function deleteStudent(index){
        students.value.splice(index,1);
    }

</script>


<template>
  <el-form ref="formRef" :model="ruleForm" label-width="120px" class="demo-dynamic">
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item
      label="Password"
      prop="pass"
      :rules="[
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ]"
    >
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';

const formRef = ref<FormInstance>();
const ruleForm = reactive({
  email: '',
  pass: ''
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!', ruleForm);
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
</script>

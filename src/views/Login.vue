<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 17:22:12
 * @Description: 
-->
<template>
  <div class="container">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script setup lang="ts">
import ValidateInput, { type RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
import createMessage from "@/components/createMessage";

const router = useRouter();
const store = useStore();

const emailVal = ref("");
const emailRules: RulesProp = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" },
];
const passwordVal = ref("");
const passwordRules: RulesProp = [
  { type: "required", message: "密码不能为空" },
];

const onFormSubmit = (result: boolean) => {
  if (result) {
    const payload = {
      email: emailVal.value,
      password: passwordVal.value,
    };
    store
      .dispatch("loginAndFetch", payload)
      .then(() => {
        createMessage("登录成功 2秒后跳转首页", "success", 2000);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
</script>

<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 21:40:42
 * @Description: 
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
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
      {{ emailVal }}
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      {{ passwordVal }}
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
// import ColumnList, { type ColumnProps } from "../components/ColumnList.vue";
import GlobalHeader, { type UserProps } from "../components/GlobalHeader.vue";
import ValidateInput, { type RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";
import { ref } from "vue";

const currentUser: UserProps = {
  isLogin: true,
  name: "viking",
};

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
  console.log(result);
};
// const list: ColumnProps[] = [
//   {
//     id: 1,
//     title: "test1的专栏",
//     description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
//   },
//   {
//     id: 2,
//     title: "test2的专栏",
//     description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
//   },
//   {
//     id: 3,
//     title: "test3的专栏",
//     description:
//       "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
//   },
//   {
//     id: 4,
//     title: "test4的专栏",
//     description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
//     avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
//   },
// ];
</script>

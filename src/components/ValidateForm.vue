<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 21:24:49
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 21:40:09
 * @Description: 
-->
<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["form-submit"]);
const submitForm = () => {
  emit("form-submit", true);
};
</script>

<style scoped></style>

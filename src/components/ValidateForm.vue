<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 21:24:49
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 23:08:33
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

<script lang="ts">
type ValidateFunc = () => boolean;
type Events = { "form-item-created": ValidateFunc };
export const emitter = mitt<Events>();
</script>

<script setup lang="ts">
import mitt from "mitt";
import { onUnmounted } from "vue";

let funcArr: ValidateFunc[] = [];

const emit = defineEmits(["form-submit"]);
const submitForm = () => {
  const result = funcArr.map((func) => func()).every((result) => result);
  emit("form-submit", result);
};
const callback = (func: ValidateFunc) => {
  funcArr.push(func);
};
emitter.on("form-item-created", callback);
onUnmounted(() => {
  emitter.off("form-item-created", callback);
  funcArr = [];
});
</script>

<style scoped></style>

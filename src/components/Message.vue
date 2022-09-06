<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-07 02:20:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 02:44:55
 * @Description: 
-->
<template>
  <teleport to="#message">
    <div
      class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="classObject"
      v-if="isVisible"
    >
      <span>{{ message }}</span>
      <button
        type="button"
        class="close"
        aria-label="Close"
        @click.prevent="hide"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import useDOMCreate from "../hooks/useDOMCreate";
export type MessageType = "success" | "error" | "default";

const props = defineProps({
  message: String,
  type: {
    type: String as PropType<MessageType>,
    default: "default",
  },
});

const emit = defineEmits(["close-message"]);

useDOMCreate("message");

const isVisible = ref(true);
const classObject = {
  "alert-success": props.type === "success",
  "alert-danger": props.type === "error",
  "alert-primary": props.type === "default",
};
const hide = () => {
  isVisible.value = false;
  emit("close-message", true);
};
</script>

<style scoped></style>

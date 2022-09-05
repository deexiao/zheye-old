<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 14:45:21
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 15:37:09
 * @Description: Dropdown
-->

<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
const dropdownRef = ref<null | HTMLElement>(null);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handler = (e: MouseEvent) => {
  if (dropdownRef.value) {
    if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
      isOpen.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handler);
});
onUnmounted(() => {
  document.removeEventListener("click", handler);
});
</script>

<style scoped></style>

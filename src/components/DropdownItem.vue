<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-07 19:55:20
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 20:07:40
 * @Description: 
-->
<template>
  <li class="dropdown-option" @click="handleItemClick" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { emitter } from './Dropdown.vue';
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    closeAfterClick: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const handleItemClick = (e: MouseEvent) => {
      emitter.emit('dropdown-item-clicked', { e, props });
    };
    return {
      handleItemClick
    };
  }
});
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>

<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-07 19:55:20
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 20:22:22
 * @Description: 
-->
<template>
  <div class="user-profile-component">
    <div class="d-flex align-items-center">
      <img :src="fitUrl" :alt="user.nickName" class="rounded-circle img-thumbnail" />
      <div class="detail ml-2">
        <h6 class="d-block mb-0">{{ user.nickName }}</h6>
        <span class="text-truncate text-muted d-block">{{ user.description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';
import type { UserProps } from '../store';
import { addColumnAvatar } from '../helper';
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup(props) {
    const fitUrl = computed(() => {
      console.log(props.user);
      addColumnAvatar(props.user, 50, 50);
      const { avatar } = props.user;
      return avatar && avatar.fitUrl;
    });
    return {
      fitUrl
    };
  }
});
</script>

<style>
.user-profile-component img {
  width: 50px;
  height: 50px;
  /* border: 1px solid #ccc;
  border-radius: 50px; */
}
</style>

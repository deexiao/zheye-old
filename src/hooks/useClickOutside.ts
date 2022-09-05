/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 15:50:02
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 15:59:35
 * @Description:
 */
import { onMounted, onUnmounted, ref, type Ref } from "vue";

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
  return isClickOutside;
};

export default useClickOutside;

/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-07 02:27:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 02:40:43
 * @Description: 
 */
import { onUnmounted } from 'vue'

function useDOMCreate(name: string | HTMLDivElement) {
  if (typeof name === 'object') {
    name.id = 'message'
    document.body.appendChild(name);
    onUnmounted(() => {
      document.body.removeChild(name)
    })
  } else if (typeof name === 'string') {
      const node = document.createElement('div')
      node.id = name
      document.body.appendChild(node)
      onUnmounted(() => {
        document.body.removeChild(node)
      })
  }
}

export default useDOMCreate

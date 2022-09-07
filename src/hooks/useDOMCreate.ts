/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-07 02:27:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 17:51:18
 * @Description: 
 */
import { onUnmounted } from 'vue'

function useDOMCreate(nodeId: string) {
  const node = document.createElement('div')
  node.id = nodeId
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}

export default useDOMCreate

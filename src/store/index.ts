/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 16:49:46
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 20:46:34
 * @Description: 
 */
import { createStore } from 'vuex'
import { testData, testPosts, type ColumnProps, type PostProps } from '../testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[]; // xxx的专栏
  posts: PostProps[];     // xxx的专栏下的文章
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: true, name: 'viking', columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters:{
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  }
})

export default store

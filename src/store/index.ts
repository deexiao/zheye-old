/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 16:49:46
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 22:25:37
 * @Description: 
 */
import { createStore } from 'vuex'
import axios from 'axios'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps;
  createdAt: string;
  column: string;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: true, name: 'viking', columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rawData) {
      state.columns = rawData.data.list
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data]
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list
    }
  },
  actions: {
    // Home 首页获取该用户专栏
    fetchColumns(context) {
      axios.get('/columns').then(resp => {
        context.commit('fetchColumns', resp.data)
      })
    },
    fetchColumn(context, cid) {
      axios.get(`/columns/${cid}`).then(resp => {
        context.commit('fetchColumn', resp.data)
      })
    },
    fetchPosts(context, cid) {
      axios.get(`/columns/${cid}/posts`).then(resp => {
        context.commit('fetchPosts', resp.data)
      })
    }
  },
  getters:{
    getColumnById: (state) => (id: string) => {
      return state.columns.find(c => c._id === id)
    },
    getPostsByCid: (state) => (cid: string) => {
      return state.posts.filter(post => post.column === cid)
    }
  }
})

export default store

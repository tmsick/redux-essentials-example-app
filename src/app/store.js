import postsReducer from '../features/posts/postsSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})

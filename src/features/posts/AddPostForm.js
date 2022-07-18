import { postAdded } from './postsSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event) => {
    setTitle(event.target.value)
  }
  const onContentChanged = (event) => {
    setContent(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (title && content) {
      // dispatch(postAdded({ id: nanoid(), title, content }))
      dispatch(postAdded(title, content))
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button type="submit">Save Post</button>
      </form>
    </section>
  )
}

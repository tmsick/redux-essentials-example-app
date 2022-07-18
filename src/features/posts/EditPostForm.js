import { postUpdated } from './postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export const EditPostForm = ({ match }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [title, setTitle] = useState(post ? post.title : '')
  const [content, setContent] = useState(post ? post.content : '')

  const onTitleChanged = (event) => {
    setTitle(event.target.value)
  }
  const onContentChanged = (event) => {
    setContent(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (title && content) {
      dispatch(postUpdated(postId, title, content))
      history.push(`/posts/${postId}`)
    }
  }

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  )
}

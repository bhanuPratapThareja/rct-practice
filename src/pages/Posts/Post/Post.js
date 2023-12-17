import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchPost } from '../../../services/posts-service'

const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const params = useParams()
  // const location = useLocation()
  
  // const loadSelectedPostCallback = useCallback(loadSelectedPost)

  useEffect(() => {
    loadSelectedPost(params.id)
  }, [params.id])

  async function loadSelectedPost(id) {
    try {
      const post = await fetchPost(id)
      console.log(post)
      setSelectedPost(post)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
        {selectedPost && selectedPost.title}
    </div>
  )
}
export default Post
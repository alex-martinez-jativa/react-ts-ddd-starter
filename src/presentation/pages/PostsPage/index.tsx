import { useEffect, useState } from 'react'
import { GetPostsUseCase } from '../../../application/use-cases/getPostsUseCase'
import { Post } from '../../../domain/entities/PostEntity'
import PostItem from '../../components/Post'

export default function DemoPage() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  const handleGetPosts = async () => {
    const postsService = new GetPostsUseCase()
    const response = await postsService.execute()
    setPosts(response)
  }

  useEffect(() => {
    handleGetPosts()
  }, [])

  return (
    <>
      <ul>
        {posts &&
          posts.map((item) => {
            return <PostItem id={item.id} title={item.title} body={item.body} />
          })}
      </ul>
    </>
  )
}

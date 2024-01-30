import { Post } from '../../../domain/entities/PostEntity'
import { PostRepository } from '../../../domain/respositories/postRepository'
import { PostDTO } from '../../dto/postDTO'
import http from '../../http'

export class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<Post[]> {
    const posts: PostDTO[] = await http({ url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' })

    return posts.map((postDTO): Post => {
      return {
        id: postDTO.id,
        title: postDTO.title,
        body: postDTO.body,
      }
    })
  }
}

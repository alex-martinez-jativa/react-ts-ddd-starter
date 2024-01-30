import { Post } from '../../entities/PostEntity'

export interface PostRepository {
  getPosts: () => Promise<Post[]>
}

import { PostRepositoryImpl } from '../../../infrastructure/repositories/postRepositoryImpl'

export class GetPostsUseCase {
  postRepository: PostRepositoryImpl
  constructor() {
    this.postRepository = new PostRepositoryImpl()
  }

  execute() {
    return this.postRepository.getPosts()
  }
}

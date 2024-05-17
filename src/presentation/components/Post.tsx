import { Post } from '../../domain/entities/PostEntity'

export default function PostItem({ id, title, body }: Post) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  )
}

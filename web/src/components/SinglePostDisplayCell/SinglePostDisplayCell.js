export const QUERY = gql`
  query postQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return (
    <article class="border border-gray-700 rounded-lg mt-5 p-5">
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Content:</strong> {post.body}</p>
      <p><strong>Time:</strong> {post.createdAt}</p>
    </article>
  )
}

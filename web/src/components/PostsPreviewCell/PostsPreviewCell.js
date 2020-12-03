import {Link, routes} from '@redwoodjs/router'

export const QUERY = gql`
  query PostsPreviewQuery {
    posts {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <article>
      <ul>
        {
          posts.map(p => {
            return(
              <li class="list-decimal list-inside">
                <Link to={routes.singlePost({id: p.id})}>{p.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

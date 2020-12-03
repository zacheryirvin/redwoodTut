import PostsLayout from 'src/layouts/PostsLayout'
import PostsCell from 'src/components/PostsCell'
import MainLayout from 'src/layouts/MainLayout'

const PostsPage = () => {
  return (
    <MainLayout>
      <PostsLayout>
        <PostsCell />
      </PostsLayout>
    </MainLayout>
  )
}

export default PostsPage

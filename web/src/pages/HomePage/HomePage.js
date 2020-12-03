import MainLayout from 'src/layouts/MainLayout'
import PostsPreviewCell from 'src/components/PostsPreviewCell'

const HomePage = () => {
  return (
    <MainLayout>
      <h1 class="font-bold text-2xl">Home Page</h1>
      <PostsPreviewCell></PostsPreviewCell>
    </MainLayout>
  )
}

export default HomePage

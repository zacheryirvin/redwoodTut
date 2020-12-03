import MainLayout from 'src/layouts/MainLayout'
import SinglePostDisplayCell from 'src/components/SinglePostDisplayCell'

const SinglePostPage = ({id}) => {
  return (
    <MainLayout>
      <h1 class="font-bold text-2xl">Post Page</h1>
      <SinglePostDisplayCell id={Number(id)}></SinglePostDisplayCell>
    </MainLayout>
  )
}

export default SinglePostPage

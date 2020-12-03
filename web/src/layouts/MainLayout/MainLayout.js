import Header from 'src/components/Header'

const MainLayout = ({ children }) => {
  return (
    <body class="m-8">
      <Header></Header>
      <main>{children}</main>
    </body>
  )
}

export default MainLayout

import {routes} from '@redwoodjs/router'

import HeaderButton from 'src/components/HeaderButton'

const Header = () => {
  const links = [
    {path: routes.home(), name: 'Home'},
    {path: routes.about(), name: 'About'},
    {path: routes.contact(), name: 'Contact'},
    {path: routes.posts(), name: 'Posts'}
  ];

  return (
    <header class="flex w-2/3 mb-3">
    {
      links.map(l => {
        return (
          <HeaderButton path={l.path} name={l.name}></HeaderButton>
        )
      })
    }
    </header>
  )
}

export default Header

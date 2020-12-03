import {Link} from '@redwoodjs/router'

const HeaderButton = ({path, name}) => {
    return (
      <Link class="w-1/3 border border-gray-700 rounded-lg text-center mx-1 hover:bg-blue-400 hover:text-white" to={path}>{name}</Link>
    )
}

export default HeaderButton

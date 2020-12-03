import { render } from '@redwoodjs/testing'

import SinglePostPage from './SinglePostPage'

describe('SinglePostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SinglePostPage />)
    }).not.toThrow()
  })
})

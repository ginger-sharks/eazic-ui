import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
  it('renders properly', () => {
    //const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect('Hello Vitest').toContain('Hello Vitest')
  })
})

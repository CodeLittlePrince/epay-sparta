import { shallowMount } from '@vue/test-utils'
import Dog from 'componentsBase/dog'

describe('cb-dog', () => {
  const wrapper = shallowMount(Dog)

  it('props: name', async () => {
    await wrapper.setProps({ name: 'Tom' })
    expect(wrapper.html()).to.contain('Tom')
  })

  it('methods: add', () => {
    expect(wrapper.vm.add(1, 2)).to.be.equal(3)
  })
})
import { shallowMount } from '@vue/test-utils'
import AuthorComponent from "../components/AuthorComponentvue"
import SearchbarComponent from '../components/SearchbarComponent.vue'
import FooterCommponent from '../components/FooterCommponent.vue'

describe('AuthorComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AuthorComponent)
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('contains the SearchbarComponent', () => {
    expect(wrapper.contains(SearchbarComponent)).toBe(true)
  })

  it('contains the FooterCommponent', () => {
    expect(wrapper.contains(FooterCommponent)).toBe(true)
  })

  it('displays the correct "best selling authors" text', () => {
    expect(wrapper.text()).toContain('best selling authors')
  })

  it('displays the correct "most popular authors" text', () => {
    expect(wrapper.text()).toContain('most popular authors')
  })

  it('renders a list of items', () => {
    wrapper.setData({ items: [{ id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }] })
    expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.find('li').text()).toBe('item 1')
  })

  it('toggles the slideshow when the button is clicked', () => {
    const toggleSlideshow = jest.fn()
    wrapper.setMethods({ toggleSlideshow })
    wrapper.find('button').trigger('click')
    expect(toggleSlideshow).toHaveBeenCalled()
  })
})

import { shallowMount } from '@vue/test-utils'
import CartComponent from "../components/CartComponent.vue";

describe('Cart Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CartComponent, {
      data() {
        return {
          items: [
            { id: 1, name: 'item1', price: 10 },
            { id: 2, name: 'item2', price: 20 },
            { id: 3, name: 'item3', price: 30 }
          ],
          vat: 0,
          total: 0
        }
      },
      methods: {
        removeItem: jest.fn(),
        checkout: jest.fn()
      }
    })
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('has a "Cart" heading', () => {
    expect(wrapper.find('h3').text()).toBe('Cart')
  });

  test('has a cart div', () => {
    expect(wrapper.contains('.cart')).toBe(true)
});
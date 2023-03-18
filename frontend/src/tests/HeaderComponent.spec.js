import { shallowMount } from "@vue/test-utils";
import HeaderComp from "../components/HeaderComponent.vue";

describe("HeaderComp", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HeaderComp);
  });

  it("should render correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have a <P> element with the text "header comp"', () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe("header comp");
  });

  it('should have a div with class "logo"', () => {
    const logo = wrapper.find(".logo");
    expect(logo.exists()).toBe(true);
  });

  it('should have a div with class "search bar"', () => {
    const searchBar = wrapper.find(".search-bar");
    expect(searchBar.exists()).toBe(true);
  });

  it('should have a div with class "login"', () => {
    const login = wrapper.find(".login");
    expect(login.exists()).toBe(true);
  });

  it('should have a div with class "register"', () => {
    const register = wrapper.find(".register");
    expect(register.exists()).toBe(true);
  });

  it("should have an unordered list with 5 list items", () => {
    const ul = wrapper.find("ul");
    const li = ul.findAll("li");
    expect(li.length).toBe(5);
  });

  it('should have a list item with the text "Home"', () => {
    const li = wrapper.findAll("li").at(0);
    expect(li.text()).toBe("Home");
  });

  it('should have a list item with the text "Shop"', () => {
    const li = wrapper.findAll("li").at(1);
    expect(li.text()).toBe("Shop");
  });

  it('should have a list item with the text "Publishers"', () => {
    const li = wrapper.findAll("li").at(2);
    expect(li.text()).toBe("Publishers");
  });

  it('should have a list item with the text "Contact"', () => {
    const li = wrapper.findAll("li").at(3);
    expect(li.text()).toBe("Contact");
  });

  it('should have a list item with the text "Cart"', () => {
    const li = wrapper.findAll("li").at(4);
    expect(li.text()).toBe("Cart");
  });
});

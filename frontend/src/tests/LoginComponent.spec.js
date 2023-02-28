import { shallowMount } from "@vue/test-utils";
import LoginComponent from "../component/LoginComponent.vue";

describe("LoginComponent", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(LoginComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a form element", () => {
    const wrapper = shallowMount(LoginComponent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("has two input fields", () => {
    const wrapper = shallowMount(Component);
    expect(
      wrapper.findAll('input[type="text"],input[type="password"]').length
    ).toBe(2);
  });

  test("has a submit button", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains('input[type="submit"]')).toBe(true);
  });

  test("has an error message", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains(".error-message")).toBe(true);
  });

  test("has a forgot password link", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains("a")).toBe(true);
  });
});

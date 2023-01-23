import { shallowMount } from "@vue/test-utils";
import RegisterComponent from "../component/RegisterComponent.vue";

describe("RegisterComponent", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(RegisterComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a form element", () => {
    const wrapper = shallowMount(RegisterComponent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("has five text inputs", () => {
    const wrapper = shallowMount(RegisterComponent);
    expect(wrapper.findAll('input[type="text"]').length).toBe(5);
  });

  test("has two password inputs", () => {
    const wrapper = shallowMount(RegisterComponent);
    expect(wrapper.findAll('input[type="password"]').length).toBe(2);
  });

  test("has a submit button", () => {
    const wrapper = shallowMount(RegisterComponent);
    expect(wrapper.contains('input[type="submit"]')).toBe(true);
  });
});

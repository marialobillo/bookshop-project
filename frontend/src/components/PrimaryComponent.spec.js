import { shallowMount } from "@vue/test-utils";
import PrimaryComponent from "../component/ PrimaryComponent.vue";

describe(" PrimaryComponent", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount( PrimaryComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a form element", () => {
    const wrapper = shallowMount( PrimaryComponent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("has two checkboxes", () => {
    const wrapper = shallowMount( PrimaryComponent);
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(2);
  });

  test("has a pagination next prev div", () => {
    const wrapper = shallowMount( PrimaryComponent);
    expect(wrapper.contains(".pagination.next.prev")).toBe(true);
  });

  test("has 3 books listed", () => {
    const wrapper = shallowMount( PrimaryComponent);
    expect(wrapper.findAll("li").length).toBe(3);
  });
});

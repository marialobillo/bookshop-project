import { shallowMount } from "@vue/test-utils";
import OtherReaderComponent from "../component/OtherReaderComponent.vue";

describe("OtherReaderComponent", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(OtherReaderComponent);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a form element", () => {
    const wrapper = shallowMount(OtherReaderComponent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("has two checkboxes", () => {
    const wrapper = shallowMount(OtherReaderComponent);
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(2);
  });

  test("has a pagination next prev div", () => {
    const wrapper = shallowMount(OtherReaderComponent);
    expect(wrapper.contains(".pagination.next.prev")).toBe(true);
  });

  test("has 3 books listed", () => {
    const wrapper = shallowMount(OtherReaderComponent);
    expect(wrapper.findAll("li").length).toBe(3);
  });
});

import { shallowMount } from "@vue/test-utils";
import PurchaseComplete from "../component/PurchaseComplete.vue";

describe("PurchaseComplete", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PurchaseComplete);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('has a "complete purchase component" text', () => {
    const wrapper = shallowMount(PurchaseComplete);
    expect(wrapper.text()).toContain("complete purchase component");
  });

  test("has a form element", () => {
    const wrapper = shallowMount(PurchaseComplete);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("has two text inputs", () => {
    const wrapper = shallowMount(PurchaseComplete);
    expect(wrapper.findAll('input[type="text"]').length).toBe(2);
  });

  test("has a buy button", () => {
    const wrapper = shallowMount(PurchaseComplete);
    expect(wrapper.contains("button")).toBe(true);
  });
});

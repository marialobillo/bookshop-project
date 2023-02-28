import { shallowMount } from "@vue/test-utils";
import PurchaseSuccessful from "../component/PurchaseSuccessful.vue";

describe("PurchaseSuccessful", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PurchaseSuccessful);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('has a "purchase successful component" text', () => {
    const wrapper = shallowMount(PurchaseSuccessful);
    expect(wrapper.text()).toContain("purchase successful component");
  });
});

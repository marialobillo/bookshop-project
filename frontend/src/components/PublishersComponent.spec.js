import { shallowMount } from "@vue/test-utils";
import Component from "./component.vue";
import FooterCommponent from "../components/FooterCommponent.vue";
import SearchbarComponent from "../components/SearchbarComponent.vue";

describe("Component", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a section element", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains("section")).toBe(true);
  });

  test("has a searchbar component", () => {
    const wrapper = shallowMount(Component, {
      components: { SearchbarComponent },
    });
    expect(wrapper.contains(SearchbarComponent)).toBe(true);
  });

  test("has two lists of items", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.findAll("ul").length).toBe(2);
  });

  test("has two toggle slideshow buttons", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.findAll("button").length).toBe(2);
  });

  test("has a footer component", () => {
    const wrapper = shallowMount(Component, {
      components: { FooterCommponent },
    });
    expect(wrapper.contains(FooterCommponent)).toBe(true);
  });
});

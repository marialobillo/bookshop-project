import { shallowMount } from "@vue/test-utils";
import SearchComponent from "../components/SecondaryComponent.vue";

describe("SearchComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchComponent);
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  it("contains a form with an input and a submit button", () => {
    expect(wrapper.contains("form")).toBe(true);
    expect(wrapper.contains("input")).toBe(true);
    expect(wrapper.contains("button")).toBe(true);
    expect(wrapper.find("input").attributes().placeholder).toBe("Search");
    expect(wrapper.find("button").text()).toBe("search");
  });
  it("has a v-model for the input field", () => {
    expect(wrapper.vm.$data.query).toBe("");
  });
});

import { shallowMount } from "@vue/test-utils";
import SecondaryComponent from "../components/SecondaryComponent.vue";

describe("SecondaryComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SecondaryComponent);
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  it("contains the correct text", () => {
    expect(wrapper.text()).toContain("secondary component");
  });
  it("contains a form with checkbox fields for subjects and grade", () => {
    expect(wrapper.contains("form")).toBe(true);
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(2);
    expect(wrapper.find('label[for="subjects"]').text()).toBe("subjects");
    expect(wrapper.find('label[for="grade"]').text()).toBe("grade");
  });
  it("contains a list of books with images", () => {
    expect(wrapper.contains("ul")).toBe(true);
    expect(wrapper.findAll("li").length).toBe(3);
    expect(wrapper.findAll("img").length).toBe(3);
  });
  it("contains a pagination component", () => {
    expect(wrapper.text()).toContain("pagination next prev");
  });
});

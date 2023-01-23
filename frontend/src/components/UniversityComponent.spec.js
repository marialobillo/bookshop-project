import { shallowMount } from "@vue/test-utils";
import UniversityComponent from "../components/UniversityComponent";

describe("UniversityComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(UniversityComponent);
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  it("contains the correct text", () => {
    expect(wrapper.text()).toContain("university component");
  });
  it("contains a form with checkbox fields for courses and book", () => {
    expect(wrapper.contains("form")).toBe(true);
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(2);
    expect(wrapper.find('label[for="courses"]').text()).toBe("courses");
    expect(wrapper.find('label[for="book"]').text()).toBe("book");
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

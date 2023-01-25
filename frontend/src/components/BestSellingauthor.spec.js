import { shallowMount } from "@vue/test-utils";
import BestSellingauthor from "../components/BestSellingauthor.vue";

describe("BestSellingauthor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(BestSellingauthor);
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct "best selling Publishers" text', () => {
    expect(wrapper.text()).toContain("best selling Publishers");
  });

  it('displays the correct "best selling authors" text', () => {
    expect(wrapper.text()).toContain("best selling authors");
  });

  it("renders a list of items", () => {
    wrapper.setData({
      items: [
        { id: 1, name: "item 1" },
        { id: 2, name: "item 2" },
      ],
    });
    expect(wrapper.findAll("li").length).toBe(2);
    expect(wrapper.find("li").text()).toBe("item 1");
  });

  it("toggles the slideshow when the button is clicked", () => {
    const toggleSlideshow = jest.fn();
    wrapper.setMethods({ toggleSlideshow });
    wrapper.find("button").trigger("click");
    expect(toggleSlideshow).toHaveBeenCalled();
  });
});

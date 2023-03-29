import { shallowMount } from "@vue/test-utils";
import Component from "./Component.vue";

describe("Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("contains a form with an email input", () => {
    expect(wrapper.contains("form")).toBe(true);
    expect(wrapper.contains('input[type="email"]')).toBe(true);
  });

  it('displays the correct "enter your email" text', () => {
    expect(wrapper.text()).toContain("enter your email");
  });

  it("displays the correct text for the email recover", () => {
    wrapper.setData({ emailRecover: "Your email has been sent" });
    expect(wrapper.find("#EmailRecover").text()).toBe(
      "Your email has been sent"
    );
  });

  it("emits an event when the form is submitted", () => {
    const input = wrapper.find('input[type="email"]');
    input.setValue("test@example.com");
    wrapper.find("form").trigger("submit");
    expect(wrapper.emitted().submit).toBeTruthy();
    expect(wrapper.emitted().submit[0]).toEqual(["test@example.com"]);
  });
});

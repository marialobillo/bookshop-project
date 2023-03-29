import { shallowMount } from "@vue/test-utils";
import ContactComponent from "../components/ContactComponent.vue";
import FooterCommponent from "../components/FooterCommponent.vue";

describe("ContactComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ContactComponent);
  });

  it("renders a form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("renders a FooterCommponent component", () => {
    expect(wrapper.find(FooterCommponent).exists()).toBe(true);
  });

  it("updates the name data property when the name input is changed", () => {
    const input = wrapper.find("input[type='name']");
    input.setValue("John Doe");
    expect(wrapper.vm.name).toBe("John Doe");
  });

  it("updates the email data property when the email input is changed", () => {
    const input = wrapper.find("input[type='email']");
    input.setValue("johndoe@example.com");
    expect(wrapper.vm.email).toBe("johndoe@example.com");
  });
});

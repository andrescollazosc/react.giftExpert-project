import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import React from "react";
import "@testing-library/jest-dom";

describe("Name of the group", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Must be show succesfully ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Must be change textbox", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("Should not post the information submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Must be call the setCategories and clean the textbox", () => {
    const value = "Hello world";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});

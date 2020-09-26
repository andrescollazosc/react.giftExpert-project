import React from "react";
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Testing in <GifExpertApp />", () => {
  test("should be show successfuly ", () => {
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

  test("Must be show one list of categories", () => {
    const categories = ["One punch", "Dragon ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GitfGrid").length).toBe(categories.length);
  });
});

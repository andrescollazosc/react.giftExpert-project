import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Testing <GifGridItem /> component", () => {
  const title = "This is a title";
  const url = "https://mundoloco.com/api/human/homer.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should return text empty", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should be have a <p></p> with a text.", () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(title);
  });

  test("should be have src img equal to url of the props", () => {
    const img = wrapper.find("img").props();

    expect(img.src).toBe(url);
    expect(img.alt).toBe(title);
  });

  test('Should be hace animate__fadeIn', () => {
      const div = wrapper.find('div');
      const className = div.prop('className');
      

      expect(className.includes('animate__fadeIn')).toBe(true);
  });
});

import { shallow } from "enzyme";
import { GitfGrid } from "../../components/GitfGrid";
import React from "react";
import "@testing-library/jest-dom";
import { useFetchGifts } from "../../hooks/useFetchGifts";
jest.mock("../../hooks/useFetchGifts");

describe("Testing <GitfGrid />", () => {
  const category = "Dragon";

  test("should be catch the snapshot", () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GitfGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should be show item when images is loaded", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://mundoloco/imagen.gif",
        title: "Cualquier cosa",
      },
      {
        id: "DFC",
        url: "https://mundoloco/imagen_1.gif",
        title: "Otra cosa ¿",
      },
    ];

    useFetchGifts.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GitfGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);

    console.log(wrapper.find("GifGridItem").length);

    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});

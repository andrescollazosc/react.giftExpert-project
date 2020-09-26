import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import { useFetchGifts } from "../../hooks/useFetchGifts";

describe("Testing in useFetchGifts hook", () => {
  test("Should be return initial state ", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifts("One punch"));
    const { data, loading } = result.current;
    
    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  test('Must be return array of images and loading equals in true', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifts("One punch"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    
    expect( data.length ).toEqual(10);
    expect( loading ).toBe(false);
  });
});

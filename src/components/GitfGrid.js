import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
// import { getGift } from "../helpers/getGifts";
import { GifGridItem } from "./GifGridItem";

export const GitfGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data, loading } = useFetchGifts(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading ?? <p>Loading</p>}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

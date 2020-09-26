import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
// import { getGift } from "../helpers/getGifts";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GitfGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data, loading } = useFetchGifts(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading ?? <p className="animate__animated animate__fadeIn">Loading</p>}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GitfGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

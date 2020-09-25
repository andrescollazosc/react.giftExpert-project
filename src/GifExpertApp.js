import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitfGrid } from "./components/GitfGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => {
          return <GitfGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;

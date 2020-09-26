import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitfGrid } from "./components/GitfGrid";

const GifExpertApp = ({ defaultCategories =[] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  console.log(defaultCategories);

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

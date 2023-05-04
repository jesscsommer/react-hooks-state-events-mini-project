import React from "react";

function CategoryFilter({ categories, changeCategory, selectedCategory }) {

  const categoryBtns = categories.map(category => 
    <button 
    key={category}
    onClick={() => changeCategory(category)}
    className={selectedCategory === category ? 'selected' : ''}>
      {category}
      </button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;

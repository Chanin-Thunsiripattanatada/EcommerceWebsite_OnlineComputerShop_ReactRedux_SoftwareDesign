import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../context';
import { Link } from 'react-router-dom';


const CategoryBar = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useContext(CategoryContext);

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    onSelectCategory(selected);
  };

  return (
    <div className="category-bar">
      <ul className="nav">
        {categories.map((category, index) => (
          <li className="nav-item" key={index}>
            <button value={category} onClick={handleCategoryChange}> {category} </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBar;

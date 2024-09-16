import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../context';
import { Link } from 'react-router-dom';


const CategoryDropdown = ({ onSelectCategory }) => {
    
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = useContext(CategoryContext);

    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategory(selected);
        onSelectCategory(selected);
    };

    return (
        <li className="nav-item dropdown align-self-center">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            หมวดหมู่สินค้า
        </Link>
        <ul className="dropdown-menu">
        {categories.map((category, index) => (
            <li key={index}>
                <Link value={category} className="dropdown-item" to={`/category/${category}`} data-bs-dismiss="offcanvas">
                    {category}
                </Link>
            </li>
        ))}
        </ul>
        </li>
    );
};

export default CategoryDropdown;

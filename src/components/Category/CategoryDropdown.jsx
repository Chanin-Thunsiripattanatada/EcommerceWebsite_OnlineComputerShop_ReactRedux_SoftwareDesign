import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../context';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCategorys } from '../../actions/categories';


const CategoryDropdown = ({ onSelectCategory }) => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(retrieveCategorys());
    }, [dispatch]);

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
                        <Link value={category.categoryName}
                            className="dropdown-item"
                            to={`/category/${category.categoryName}`}
                            data-bs-dismiss="offcanvas">
                            {category.categoryName}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default CategoryDropdown;

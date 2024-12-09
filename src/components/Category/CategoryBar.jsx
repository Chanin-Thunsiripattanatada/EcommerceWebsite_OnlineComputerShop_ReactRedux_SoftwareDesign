import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCategorys } from '../../actions/categories';

const CategoryBar = ({ onSelectCategory }) => {
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
        <div className="container my-4">
            <h4 className="mb-3">ประเภทสินค้า</h4>
            <div className="row">
                {categories.map((category, index) => (
                    <div className="col-md-3 col-sm-6 mb-3" key={index}>
                        <button
                            className={`btn btn-outline-primary w-100 ${selectedCategory === category.categoryName ? 'active' : ''}`}
                            value={category.categoryName}
                            onClick={handleCategoryChange}
                        >
                            {category.categoryName}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;

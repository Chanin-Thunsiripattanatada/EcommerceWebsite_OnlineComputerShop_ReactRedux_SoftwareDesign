import React, { createContext, useState, useContext, useEffect} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products to state
      } catch (err) {
        setError(err.message); // Set error message to state
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};


export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories] = useState([
        "All", "Laptop", "Mouse", "Gaming Laptop", "Monitor", "RAM", "External HDD", "CPU"
    ]);

    return (
        <CategoryContext.Provider value={categories}>
            {children}
        </CategoryContext.Provider>
    );
}
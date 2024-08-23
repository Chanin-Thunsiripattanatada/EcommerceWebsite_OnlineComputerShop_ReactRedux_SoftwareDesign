import React, { createContext, useState, useContext, useEffect} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            product_id: 1,
            product_name: 'HP Spectre x360',
            category: 'Laptop',
            brand: 'HP',
            model: '14-ae0014dx',
            price: 1199,
            stock_quantity: 25,
            description: '14" 2-in-1 laptop with Intel i7, 16GB RAM, 512GB SSD',
        },
        {
            product_id: 2,
            product_name: 'Dell XPS 13',
            category: 'Laptop',
            brand: 'Dell',
            model: '7390',
            price: 1299,
            stock_quantity: 30,
            description: '13.3" ultrabook with Intel i7, 16GB RAM, 1TB SSD',
        },
        {
            product_id: 3,
            product_name: 'Apple MacBook Pro',
            category: 'Laptop',
            brand: 'Apple',
            model: '16-inch',
            price: 2399,
            stock_quantity: 15,
            description: '16" Retina display, Intel i9, 32GB RAM, 1TB SSD',
        },
        {
            product_id: 4,
            product_name: 'Logitech MX Master',
            category: 'Mouse',
            brand: 'Logitech',
            model: 'MX Master 3',
            price: 99,
            stock_quantity: 50,
            description: 'Ergonomic wireless mouse with customizable buttons',
        },
        {
            product_id: 5,
            product_name: 'ASUS ROG Strix G15',
            category: 'Gaming Laptop',
            brand: 'ASUS',
            model: 'G15',
            price: 1599,
            stock_quantity: 20,
            description: '15.6" gaming laptop with AMD Ryzen 7, 16GB RAM, 512GB SSD',
        },
        {
            product_id: 6,
            product_name: 'Samsung Odyssey G7',
            category: 'Monitor',
            brand: 'Samsung',
            model: 'G7 27"',
            price: 699,
            stock_quantity: 10,
            description: '27" curved gaming monitor with 1440p resolution and 240Hz refresh rate',
        },
        {
            product_id: 7,
            product_name: 'Corsair Vengeance',
            category: 'RAM',
            brand: 'Corsair',
            model: '16GB DDR4',
            price: 79,
            stock_quantity: 100,
            description: '16GB (2 x 8GB) DDR4 3200MHz RAM kit',
        },
        {
            product_id: 8,
            product_name: 'Seagate Expansion',
            category: 'External HDD',
            brand: 'Seagate',
            model: '2TB',
            price: 89,
            stock_quantity: 40,
            description: '2TB external hard drive with USB 3.0 connectivity',
        },
        {
            product_id: 9,
            product_name: 'Intel Core i9-13900K',
            category: 'CPU',
            brand: 'Intel',
            model: 'Core i9-13900K',
            price: 499,
            stock_quantity: 15,
            description: '24-core, 32-thread processor for high-performance computing',
        },
    ]);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
}

/*
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        
    ]);
    
    useEffect(() => {
        const loadedData = window.localStorage.getItem('CART_ITEMS');
        if (loadedData !== null) {
            setCartItems(JSON.parse(loadedData));
            console.log('loaded1', JSON.parse(loadedData));
            console.log('loaded', cartItems);
        }
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('CART_ITEMS', JSON.stringify(cartItems));
        console.log('set', JSON.stringify(cartItems));
    }, [cartItems]);

    const addCartItem = (product) => {
        setCartItems(() => {
            const prevItems = cartItems;
            console.log(prevItems);
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addCartItem, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};*/
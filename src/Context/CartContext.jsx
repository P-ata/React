import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalProductsAdded, setTotalProductsAdded] = useState(0);
    const [totalToPay, setTotalToPay] = useState(0);

    useEffect(() => {
        updateTotalProductsAdded();
        updateTotalToPay();
    }, [cart]);

    const addItem = (productToAdd, quantity) => {
        if (!isInCart(productToAdd.id)) {
            const newProduct = {
                ...productToAdd,
                quantity: quantity || 1
            };
            setCart([...cart, newProduct]);
        } else {
            const newProducts = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const newQuantity = prod.quantity + (quantity || 1);
                    const newProduct = {
                        ...prod,
                        quantity: newQuantity
                    };
                    return newProduct;
                } else {
                    return prod;
                }
            });
            setCart(newProducts);
        }
    };

    const updateTotalProductsAdded = () => {
        let count = 0;
        cart.forEach(prod => {
            count += isNaN(prod.quantity) ? 0 : prod.quantity;
        });

        setTotalProductsAdded(count);
    };

    const updateTotalToPay = () => {
        let total = 0;
        cart.forEach(prod => {
            total += (prod.quantity || 0) * prod.price;
        });

        setTotalToPay(total);
    };

    const isInCart = (id) => {
        return cart.some(p => p.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id);
        setCart(products);
    };

    const getProductQuantity = (id) => {
        return cart.find(prod => prod.id === id)?.quantity;
    };

    console.log('Cart:', cart);
    console.log('Total Products Added:', totalProductsAdded);
    console.log('Total to Pay:', totalToPay);

    return (
        <CartContext.Provider value={{
            cart,
            totalProductsAdded,
            totalToPay,
            addItem,
            isInCart,
            clearCart,
            removeItem,
            getProductQuantity,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

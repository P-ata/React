import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)

    useEffect(() => {
        updateTotalProductsAdded()
        updateTotalToPay()
    }, [cart]) //eslint-disable-line

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

    const updateTotalProductsAdded = () => {
        let count = 0
        cart.forEach(prod => {
            count += isNaN(prod.quantity) ? 0 : prod.quantity;
        })

        setTotalProductsAdded(count)
    }

    const updateTotalToPay = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        setTotalToPay(total)
    }
    
    const isInCart = (id) => {
        return cart.some(p => p.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id )
        setCart(products)
    }

    const getProductQuantity = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }


    return(
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
    )
}

export const useCart = () => {
    return useContext(CartContext)
}











































// import { createContext, useState } from "react";

// export const CartContext = createContext({
//     cart: []
// })

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])

//     console.log(cart)

//     const addItem = (item, quantity) => {
//         if(!isInCart(item.id)) {
//             setCart(prev => [...prev, {...item, quantity}])
//         } else {
//             console.error('El producto ya fue agregado')
//         }
//     }

//     const removeItem = (itemId) => {
//         const cartUpdated = cart.filter(prod => prod.id !== itemId)
//         setCart(cartUpdated)
//     }

//     const clearCart = () => {
//         setCart([])
//     }

//     const isInCart = (itemId) => {
//         return cart.some(prod => prod.id === itemId)
//     }

//     return (
//         <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
//             { children }
//         </CartContext.Provider>
//     )
// }
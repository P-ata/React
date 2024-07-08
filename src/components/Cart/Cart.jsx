
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalToPay, totalProductsAdded } = useContext(CartContext);

    if (totalProductsAdded === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link className='i' to='/'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${totalToPay}</h3>
            <button onClick={() => clearCart()} className="i">Limpiar carrito</button>
            <Link className='i' to='/checkout'>Checkout</Link>
        </div>
    );
};

export default Cart;

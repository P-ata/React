import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);
    const [addedToCartMessage, setAddedToCartMessage] = useState("");

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            name,
            price
        };

        addItem(item, quantity);
        setAddedToCartMessage(`Agregado al carrito: ${quantity} ${quantity > 1 ? 'productos' : 'producto'}`);
    };

    return (
        <article className="carditem-detail">
            <div className="carditem-border">
                <header className='header'>
                    <h2 className='itemheader'>
                        {name}
                    </h2>
                </header>
                <picture className="item-img">
                    <img src={img} alt={name}/>
                </picture>
                <section className="item-p">
                    <p>
                        Precio: ${price}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="itemdetail-footer">
                    {addedToCartMessage && <p>{addedToCartMessage}</p>}
                    {quantityAdded > 0 ? (
                        <Link className='itemdetail-button' to='/cart'>Ir al carrito</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )}
                </footer>
            </div>
        </article>
    );
}

export default ItemDetail;

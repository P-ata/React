import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../../Context/CartContext";






const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
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
                        precio: ${price}
                    </p>
                    <p>
                        stock disponible: {stock}
                    </p>
                </section>
            <footer className="itemdetail-footer">
            {
                quantityAdded > 0 ? (
                    <Link className='itemdetail-button' to='/cart'>Terminar compra</Link>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            </footer>
            </div>
        </article>
    )
}

export default ItemDetail



import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer" >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
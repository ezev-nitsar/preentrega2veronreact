import { useParams } from "react-router-dom";
import { getProductById } from "../../data-mock";
import Item from './../Item/Item';
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log('Hubo un error: ' + error)
            })
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Item {...product} />
            </div>
        </div>
    );
}
export default ItemDetailContainer;
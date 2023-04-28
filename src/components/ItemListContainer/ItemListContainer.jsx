import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../data-mock';
import { useParams } from 'react-router-dom';
import ItemList from '.././ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const funcionElegida = id ? getProductsByCategory : getProducts
        funcionElegida(id)
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.log("Hubo un error: " + error);
            })
    }, []);
    return (
        <div className="container">
            <h1>{greeting}</h1>
            <div className='row justify-content-center'>
                <ItemList products={data} />
            </div>
        </div>
    );

}
export default ItemListContainer;
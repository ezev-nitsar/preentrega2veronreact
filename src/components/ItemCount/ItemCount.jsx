import { useState } from 'react'
import Button from 'react-bootstrap/Button';
export const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div className='flex'>
            <div class='d-flex justify-content-between'>
                <Button variant='danger' onClick={restar}>-</Button>
                <h4>{cantidad}</h4>
                <Button variant='success' onClick={sumar}>+</Button>
            </div>
            <div class='d-flex justify-content-center'>
                <Button variant='primary' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</Button>
            </div>
        </div>
    );
}
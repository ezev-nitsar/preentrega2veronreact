import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
const enviarNotificacion = (cantidad) => {
    toast.success('Agregaste ' + cantidad + ' al Carrito');
}

const Item = ({ id, title, description, image, price }) => {
    return (
        <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 mt-1">
            <Card>
                <Link to={`/item/${id}`}><Card.Img variant='top' src={image} style={{ height: '300px' }} /></Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <ItemCount stock={100} inicial={1} onAdd={(cantidad) => enviarNotificacion(cantidad)} />
                    <ToastContainer hideProgressBar={true} autoClose={1000} theme='colored' pauseOnHover={false} closeOnClick={true} />
                </Card.Body>
            </Card>
        </div>
    );
}
export default Item;
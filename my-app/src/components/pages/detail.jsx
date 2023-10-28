
import { Button } from "react-bootstrap";
import items from "../category/items"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';
import CardWidget from "../NavBar/cardwidget";
import { useState } from "react";
import { useCart } from "../cartContext";

function Detail() {    


    const {name,} = useParams()
     const navigate = useNavigate()
     const item = items.find(i => i.name === name)

     const [count, setCount] = useState(0);

     const sumarDeaUno = () => {
       setCount(count + 1);
     };

      
      const { addToCart } = useCart();
 

  return (
    <Card>
      <Card.Img className="card" variant="top" src={item.img} />
      <Card.Body className="card">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Color: {item.color}
            <br/>
            ID : {item.id}
            <br/>
            Descripcion: {item.info}
            <br/>
            <strong>Precio: ${item.precio}</strong>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="buttons">            
            <Button className="butn" onClick={() => navigate(-1)}>Volver</Button> 
            <Button className="butn" onClick={() => {
              addToCart(item);
              alert("AGREGADO AL CARRITO CON EXITO");}}>Comprar</Button>
        </ListGroup.Item>
      </ListGroup>

    </Card>
    
  );
}

export default Detail;
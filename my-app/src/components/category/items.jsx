import { Link } from "react-router-dom"

// const Items = ({name, color, id, onClick, style}) => {
//     return(
//         // <tr>
//         //     <td>{name}</td>
//         //     <td>
//         //         <div onClick={() => onClick({name, color, id})}>
//         //             {color}
//         //         </div>
//         //     </td>
//         //     <td>
//         //         {id}
//         //     </td>
//         // </tr>

//         <div onClick={ ()=> onClick(id)}>
//             <h2>{name}</h2>
//             <ul>
//                 <li>Color : {color}</li>
//                 <li>Id : {id}</li>
//             </ul>
//             <Link to={`/producto/${name}`}>Abrir</Link>
//         </div>
//     )

// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Items = ({name, color, id,img, precio, style}) => {
  return (
    <Card className="grid-card" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img} style={{ width: '100%', height: "10em", objectFit:"contain" }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Color: {color}
            <br/>
            ID: {id}
            <br/>
            Precio: <strong style={{fontSize:"1.3em"}}>${precio}</strong>
        </Card.Text>
        <Link to={`/producto/${name}`} variant="primary"><Button>Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Items
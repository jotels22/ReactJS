import Items from "./items.jsx";
import {Row, Col} from "react-bootstrap" ;

const ItemsRows = ( {items} )  => {
    return (
        <Row>
            {items.map ((item) => (
                <Col>
                    <Items
                    name={item.name}
                    color={item.color}
                    id={item.id}
                    style={item.style}
                    onClick={item.onClick}
                    img={item.img}
                    precio={item.precio}
                    />
                </Col>
            ))}
            </Row>
    )
            }

export default ItemsRows

import items from "../category/items"
import ItemsTableContainer from "../category/itemstablecontainer"
import { useState } from "react"
import Banner from "../category/Banner"
import { Button } from "react-bootstrap"

const Home = (cart) => {

    const [selectedItems, setSelectedItems] = useState([])

    const estaFuncionando = (item) => {
        const newArray = [...selectedItems, item]
        setSelectedItems(newArray)
    }

    const itemsWithOnClick = items.map ((items) => {
        return{
            ...items,
            onClick: function(id) {   
                estaFuncionando(id)
            },
     }
    }
    )   
    


    return (
        <>
            <Banner/>
            <ItemsTableContainer items={itemsWithOnClick} />
        </>

    )
}
export default Home




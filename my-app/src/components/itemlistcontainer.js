const ItemListContainer = (props) => {

 const styleUl = {

   listStyle: "none",
   display: "flex",
   wrap:"nowrap",
   justifyContent:"space-between",
   padding:6,
   margin:10,
   cursor:"pointer",
}
const styleLi = {
    padding:20,
    margin:6,
    backgroundColor: "green",   
    color:"white",
    borderRadius: 5,
}

    return (
        <div>
            <p>{props.greeting}</p>
            <ul style={styleUl} >
                <a>
                    <li style={styleLi}>Gorras</li>
                </a>
                <a>
                    <li style={styleLi}>Remeras</li>
                </a>
                <a>
                    <li style={styleLi}>Pantalones</li>
                </a>
                <a>
                    <li style={styleLi}>Medias</li>
                </a>
                <a>
                    <li style={styleLi}>Zapatillas</li>
                </a>
            </ul>
        </div>
    )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import Loading from "../category/loading"
import Contacto from "./Contacto"

const Contact = () => {

    const [isLoading, setIsLoading] = useState(true)
    
    useEffect (()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 3000)
    })

    if(isLoading){
        <>
        cargando...
        </>
    }

    return(

         <div>
               {
                  isLoading
                  ? (<Loading/>
                  ) : (
                  <Contacto />
                  )
   }
         </div>


    )
} 
export default Contact
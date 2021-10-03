import { useState } from "react"
//Hooks que recibe un objeto con las propiedad de un input o selector que queramos manipular, devuelve el valor y el metodo
export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }
 
    const handleInputChange= ({target}) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });


    }

    return [values, handleInputChange, reset]
}

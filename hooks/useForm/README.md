# useForm Hook

Ejemplo de uso:

```
    //Para llamar al useForm
    const [ {nameInput}, handleInputChange, reset] = useForm({
        nameInput: ''
    })
    //La funcion del form
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(buscar);
        reset()
    }
    //El form
    <form onSubmit={handleSearch} >
        <input 
            type="text"
            name="buscar"
            className="form-control"
            placeholder="Find your hero"
            value={buscar}
            onChange={handleInputChange}
         />
         <button
             type="submit"
             className="btn m-1 btn-block btn-outline-primary"
             >
             Search
         </button>
     </form>
```

useForm()  
// recibe la referencia del name del input al que queramos aplicar el useForm 
// (1er arg es el value del input, 2do arg es el onChange, 3er arg es el reset para la funcion del form)

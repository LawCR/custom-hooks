# useFetch Hook

Ejemplo de uso:

```
    const { data, loading: true, error: null } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    //Para meterlo dentro de un useLayoutEffect
    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
```

useFetch()  // recibe el link de la api que querramos consumir.
fetch(`/texto.txt`)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error("Ocurrio un error: ", error);
    })
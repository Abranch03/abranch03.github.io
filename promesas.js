console.log('Testeando promesas con fetch');
fetch(`texto.txt`)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error("Ocurrio un error: ", error);
    })
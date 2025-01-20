console.log('Testeando promesas con fetch');
fetch(`texto.txt`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error)=>{
        console.error("Ocurrio un error: ", error);
    })
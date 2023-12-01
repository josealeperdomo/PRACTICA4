let atras = document.getElementById('atras')
let adelante = document.getElementById('adelante')
let arrayDatos = []
let apiUrl = 'https://rickandmortyapi.com/api/character?page=1'
let contador = 1

const incremento = (num)=>{
    if(contador > 1 && contador < 42 || contador == 1 && num > 0 || contador == 42 && num < 0){
        contador += num
        let Url = 'https://rickandmortyapi.com/api/character?page=' + contador
        inicio(Url)
    }else if(contador == 1 && num < 0){
        contador = 42
        let Url = 'https://rickandmortyapi.com/api/character?page=' + contador
        inicio(Url)
    }else if(contador == 42 && num > 0){
        contador = 1
        let Url = 'https://rickandmortyapi.com/api/character?page=' + contador
        inicio(Url)
    }
}

const getDatos = async (api) =>{
    return fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => datos)
        .catch((error) => console.log(error))
}

const inicio = async (url)=>{
    const getData = await getDatos(url)
    arrayDatos = getData;
    let content = document.getElementById('content');
    content.innerHTML = ''
    arrayDatos.results.map((personaje)=>{
            let parrafo = document.createElement('p')
            parrafo.innerHTML = `${personaje.id} - ${personaje.name}`
            let imagen = document.createElement('img')
            imagen.src = personaje.image
            content.appendChild(parrafo);
            content.appendChild(imagen);
            console.log(url);
    })
}

inicio(apiUrl)
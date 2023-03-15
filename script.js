async function buscarPersonagem(){
    // CHAMADA DE FUNÇÃO FUNÇÃO BUSCAR ELEMENTO HTML DO INPUT
    const id = elementoIdPersonagem()

    const personagem = await buscarPersonagemDaApi(id)

    resultado(personagem)
}


// FUNÇÃO BUSCAR ELEMENTO HTML DO INPUT
function elementoIdPersonagem(){
    const inputPersonagem = document.getElementById("IdPersonagem").value
    return inputPersonagem
}


// FUNÇÃO DA API
async function buscarPersonagemDaApi(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    const response = await fetch(url)
    return await response.json()
}

// MOSTRAR NA TELA
function resultado(personagem){
     const elementoImg = document.getElementById("imgPersonagem");
     elementoImg.src = personagem.sprites.front_default

     const elementoName = document.getElementById("namePersonagem");
     elementoName.innerHTML = personagem.name
}


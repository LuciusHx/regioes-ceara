import estados from './estados.js'

let micros = {
    23001: "lista-litoral_camocim",
    23002: "lista-ibiapaba",
    23003: "lista-coreau",
    23004: "lista-meruoca",
    23005: "lista-sobral",
    23006: "lista-ipu",
    23007: "lista-santa_quiteria",
    23016: "lista-fortaleza",
    23020: "lista-inhamus",
};

function percorrerLista(){
    for(let i = 0; i < estados.length; i++){
        let idDaLista = micros[estados[i].microrregiao.id];
        if(idDaLista){
            let listaElement = document.getElementById(idDaLista);
            if(listaElement){
                listaElement.innerHTML+= `<li>${estados[i].nome}</li>`
            }
        }
    }
}

percorrerLista();
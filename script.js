import estados from './estados.js'

let selecione = document.getElementById("select");
let ibiapaba = document.getElementById("lista-ibiapaba");
let fortaleza = document.getElementById("lista-fortaleza");
let inhamus = document.getElementById("lista-inhamus");
let meruoca = document.getElementById("lista-meruoca");
let estado = estados;
// tagUl.textContent = "Conteúdo de texto" //renderiza tudo como texto puro
// tagUl.innerText = "<li>Estado: Acre, Região: Norte</li>" //renderiza  tag html
function clique(){
    console.log("Teste")
}


setTimeout(function() {
    for(let i = 0; i < estado.length; i++){
        // Ibiapaba
        if(estado[i].microrregiao.id == 23002){
            ibiapaba.innerHTML += `<li>${estado[i].nome}</li>`;
        } 
        //fortaleza
        else if (estado[i].microrregiao.id == 23016){
            fortaleza.innerHTML += `<li>${estado[i].nome}</li>`;
        }    //Sertão de Inhamuns
        else if (estado[i].microrregiao.id == 23020){
            inhamus.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Meruoca
        else if(estado[i].microrregiao.id == 23004) {
            meruoca.innerHTML += `<li>${estado[i].nome}</li>`;
        }
    }

    
},500);


console.log(tagUl);
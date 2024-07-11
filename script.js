import estados from './estados.js'


let ibiapaba = document.getElementById("lista-ibiapaba");
let fortaleza = document.getElementById("lista-fortaleza");
let inhamus = document.getElementById("lista-inhamus");
let meruoca = document.getElementById("lista-meruoca");
let camocim = document.getElementById("lista-litoral_camocim");
let coreau = document.getElementById("lista-coreau");
let sobral = document.getElementById("lista-sobral");
let ipu = document.getElementById("lista-ipu");
let santaQuiteria = document.getElementById("lista-santa_quiteria");

let estado = estados;
// variavel.textContent = "Conteúdo de texto" //renderiza tudo como texto puro
// variavel.innerText = "<li>Estado: Acre, Região: Norte</li>" //renderiza  tag html


function percorrerLista(){
    for(let i = 0; i < estado.length; i++){
        // Ibiapaba
        if(estado[i].microrregiao.id == 23002){
            ibiapaba.innerHTML += `<li>${estado[i].nome}</li>`;
        } 
        //fortaleza
        else if (estado[i].microrregiao.id == 23016){
            fortaleza.innerHTML += `<li>${estado[i].nome}</li>`;
        }    
        //Meruoca
        else if(estado[i].microrregiao.id == 23004) {
            meruoca.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Sertão de Inhamuns
        else if (estado[i].microrregiao.id == 23020){
            inhamus.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Litorak de Camocim e Acaraú
        else if (estado[i].microrregiao.id == 23001){
            camocim.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Coreau
        else if (estado[i].microrregiao.id == 23003){
            coreau.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Sobral
        else if (estado[i].microrregiao.id == 23005){
            sobral.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Ipu
        else if (estado[i].microrregiao.id == 23006){
            ipu.innerHTML += `<li>${estado[i].nome}</li>`;
        }
        //Santa Quitéria
        else if (estado[i].microrregiao.id == 23007){
            santaQuiteria.innerHTML += `<li>${estado[i].nome}</li>`;
        }
    }
}


percorrerLista();

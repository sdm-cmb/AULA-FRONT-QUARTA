import { dadosCep } from "./dados.js"

//receber botão pesquisar no JS
const botaoPesquisar = document.getElementById('pesquisar')


function validadarDados() {
    let caixaCep = String(document.getElementById('input-cep').value)
    let status = false

    //Validação da caixa em branco 
    if (caixaCep == '') {
        alert('Não foi possivel realizar a busca, pois a caixa esta vazia ')
        status = true
        //validação da quantidade 
    } else if (caixaCep.length != 9) {
        alert('É obrigatorio a entrada de 9 digitos para cep')
        status = true
    }
    return status
}

//Função anonima
const getDadosCep = function () {
    console.log(dadosCep.dados[0].cep)
}

//evento de escuta, espera um evento(clique) no HTML dentro do botão 
botaoPesquisar.addEventListener('click', function () {
})
//grande parte dos eventos trabalham com função de callback chama, e da retorno pela função

botaoPesquisar.addEventListener('click', function () {
    if (!validadarDados()) {
        getDadosCep()
    }
})

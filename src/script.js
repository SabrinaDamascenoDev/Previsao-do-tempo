

const key = "26565d934dfb4f247bf2e68bd0704416"

const button = document.querySelector('.pesquisar_btn')


function mostrarDiv() {
    
        document.getElementById("clima").style.display = "block";

        cliqueiNoBotao()
   
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.nome_cidade').value;
   

    buscarCidade(cidade)
    
}

async function buscarCidade(cidade){
    
    
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )

   colocarDadosNaTela(dados)

}

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector('.titulo').innerHTML = dados.name + ", " + dados.sys.country
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao_temp").innerHTML = dados.weather[0].description
    document.querySelector('.temp_max').innerHTML = Math.floor(dados.main.temp_max) + "°C"
    document.querySelector('.temp_min').innerHTML = Math.floor(dados.main.temp_min) + "°C"
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "%"
    document.querySelector('.vento').innerHTML = dados.wind.speed + "km/h"
    document.querySelector('.temp_foto').src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

}



button.addEventListener('click', mostrarDiv)


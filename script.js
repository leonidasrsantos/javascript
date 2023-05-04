//Funções de clique no nav para abrir o Modulo desejado

let introducao = window.document.getElementById('aviso01')
let modulos = window.document.querySelectorAll('div#navegacao li')
let arquivos = window.document.querySelectorAll('section#arquivos div')

for (let pos = 0;pos < modulos.length; pos++){
    modulos[pos].addEventListener('click', function(){
        if (arquivos[pos].style.display == 'none'){
            introducao.style.display = 'none'
            arquivos[pos].style.display = 'block'
            modulos[pos].style.color = 'yellow'
            for (let posi = 0; posi < arquivos.length; posi++){
                if(posi != pos){ 
                arquivos[posi].style.display = 'none'
                modulos[posi].style.color = 'white'
                }
            }
        }
        else{
            introducao.style.display = 'block'
            arquivos[pos].style.display = 'none'
            modulos[pos].style.color = 'white'
        }        
    })
}

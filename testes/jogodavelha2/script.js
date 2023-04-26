let jogador = 'X'
let space = window.document.querySelectorAll('div#jogo td')

for (let pos in space){
    space[pos].setAttribute('id',`space${pos}`)
    space[pos].addEventListener('click',function(){
        let spaco = window.document.getElementById(`space${pos}`)
        spaco.textContent = jogador
        ganhou()
        
               
    })
}

function ganhou(){
}

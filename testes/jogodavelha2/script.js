let jogador = 'o'
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
    let a = 0;let b = 1;let c = 2;  let d = 0;let f = 3;let g = 6;  let h = 0;let i = 4;let j = 8;
    //Validação vertical e horizontal
        for (c; c <= 9; c+=3){
            if (space[a].textContent && space[b].textContent && space[c].textContent ||space[d].textContent && space[f].textContent && space[g].textContent  == jogador){
                console.log('horizontal e vertical')
            }
            a+=3;b+=3;  d++;f++;g++;
        }
    //Validação diagonal
        for (h; h < 4; h+=2){ 
            if(space[h].textContent && space[i].textContent && space[j].textContent == jogador){
                console.log('diagonal')
            }
            j-=2; 
        }
        
}
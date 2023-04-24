let artigo = window.document.querySelectorAll('div#inform article')
let opcoes = window.document.querySelectorAll('ul li')

for(let pos in opcoes){
    opcoes[pos].addEventListener('click',function(){
        if (artigo[pos].style.display == 'none'){
            artigo[pos].style.display = 'block'
            for (let posi in artigo){
                if(posi != pos){
                    artigo[posi].style.display = 'none'
                }
            }
        }else{
            artigo[pos].style.display = 'none'
        }
    })
}

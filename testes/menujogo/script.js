let perso = window.document.querySelectorAll('ul#personagens li')
let img = window.document.getElementById('img')
let descri = window.document.querySelectorAll('descri des') 

for (let pos in perso){ 
        perso[pos].addEventListener('click',function(){
            window.document.getElementById('nick').textContent = perso[pos].textContent
            window.document.getElementById('imagemRotativa').setAttribute('src',`_imagens/personagem${pos}.jpg`)
            window.document.getElementById('description').textContent =  descri[pos].textContent
         })
        
}

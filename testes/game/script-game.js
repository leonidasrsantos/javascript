let x = 0
let y = 0
let player = window.document.getElementById('jogador')
window.document.addEventListener("keypress",function(event){
    if(event.key == 'S'){
        y += 4
        player.style.top = `${y}px` 
    }
    if(event.key == 'W'){
        y -=4
        player.style.top = `${y}px`
    }
    if(event.key == 'A'){
        x -=4
        player.style.left = `${x}px`
    }
    if(event.key == 'D'){
        x +=4
        player.style.left = `${x}px`
    }
})
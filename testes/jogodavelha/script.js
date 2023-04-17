let player = Number(0)
let verificacaoX = []
let verificacaoO = []
let valendo = true
let velh = false
let spaceOn = window.document.getElementById('spaceOne')
let spaceTw = window.document.getElementById('spaceTwo')
let spaceFou = window.document.getElementById('spaceFour')
let spaceThre = window.document.getElementById('spaceThree')
let spaceFiv = window.document.getElementById('spaceFive')
let spaceSi = window.document.getElementById('spaceSix')
let spaceSeve = window.document.getElementById('spaceSeven')
let spaceEigh = window.document.getElementById('spaceEight')
let spaceNin = window.document.getElementById('spaceNine')

function escolhaX(){
    player = 1
    document.getElementById('introducao').style.display = 'none'
    document.getElementById('jogodavelha').style.display= 'block'
    document.getElementById('jogador').innerHTML = 'X'
}

function escolhaO(){
    player = 0
    document.getElementById('introducao').style.display = 'none'
    document.getElementById('jogodavelha').style.display= 'block'
    document.getElementById('jogador').innerHTML = 'O'
}

/*Funções de Escolha*/
function spaceOne(){
    if ( valendo === false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceOne').textContent != '' ){
    console.log( document.getElementById('spaceOne'))
    window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
   }else if(player == 1){
        player = 0
        document.getElementById('spaceOne').innerHTML = 'X'
        document.getElementById('jogador').innerText = 'O'
        verificacaoX.push(1)
        arrayX()
    }else{
        player = 1
        document.getElementById('spaceOne').innerHTML = 'O'
        document.getElementById('jogador').innerText = 'X'
        verificacaoO.push(1)
        arrayO()
    }
 
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceTwo(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceTwo').  textContent != '' ){
        console.log( document.getElementById('spaceTwo'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceTwo').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(2)
            arrayO()
    }else{
            player = 1
            document.getElementById('spaceTwo').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(2)
            arrayX()
        }
        let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceThree(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceThree').textContent != '' ){
        console.log( document.getElementById('spaceThree'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceThree').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(3)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceThree').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(3)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceFour(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceFour').textContent != '' ){
        console.log( document.getElementById('spaceFour'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
       }else if(player == 1){
            player = 0
            document.getElementById('spaceFour').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(4)
            arrayX()
        }else{
            player = 1
            document.getElementById('spaceFour').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(4)
            arrayO()
        }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceFive(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceFive').textContent != '' ){
        console.log( document.getElementById('spaceFive'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceFive').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(5)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceFive').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(5)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceSix(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceSix').textContent != '' ){
        console.log( document.getElementById('spaceSix'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceSix').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(6)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceSix').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(6)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceSeven(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceSeven').textContent != '' ){
        console.log( document.getElementById('spaceSeven'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceSeven').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(7)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceSeven').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(7)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceEight(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceEight').textContent != '' ){
        console.log( document.getElementById('spaceEight'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceEight').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(8)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceEight').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(8)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}
function spaceNine(){
    if ( valendo == false || velh == true){
    window.alert('Ops!! Parece que a partida já acabou!')
    }else if(document.getElementById('spaceNine').textContent != '' ){
        console.log( document.getElementById('spaceNine'))
        window.alert('Parece que alguém já escolheu esse lugar! Escolha outro.')
    }else if(player == 1){
            player = 0
            document.getElementById('spaceNine').innerHTML = 'X'
            document.getElementById('jogador').innerText = 'O'
            verificacaoX.push(9)
            arrayX()
    }else{
            player = 1
            document.getElementById('spaceNine').innerHTML = 'O'
            document.getElementById('jogador').innerText = 'X'
            verificacaoO.push(9)
            arrayO()
    }
    let s = verificacaoO.length + verificacaoX.length
    if (s == 9){
        console.log(s)
        velha()
    }
}

//------- Funções de verificação -------
//variaveis para controlar o placar
let round = window.document.getElementById('roundP')
let oPlacar = window.document.getElementById('bolaP')
let xPlacar = window.document.getElementById('xisP')
let v = 0
let vao = false
let vax = false
function arrayX(){
    if(verificacaoX.length > 2){
        //jogo horizontal -||- vertical -||- diagonal
        if(spaceOn.textContent == 'X' && spaceTw.textContent == 'X' &&spaceThre.textContent == 'X' ||spaceFou.textContent == 'X' && spaceFiv.textContent == 'X' && spaceSi.textContent == 'X'||spaceSeve.textContent == 'X' && spaceEigh.textContent == 'X' &&spaceNin.textContent == 'X' ||spaceOn.textContent == 'X' && spaceFou.textContent == 'X' &&spaceSeve.textContent == 'X' ||spaceTw.textContent == 'X' && spaceFiv.textContent == 'X' &&spaceEigh.textContent == 'X'||spaceThre.textContent == 'X' && spaceSi.textContent == 'X' &&spaceNin.textContent == 'X' ||spaceOn.textContent == 'X' && spaceFiv.textContent == 'X' && spaceNin.textContent == 'X' || spaceThre.textContent == 'X' && spaceFiv.textContent == 'X' &&spaceSeve.textContent == 'X' ){
            valendo = false
            console.log(valendo) 
            window.document.getElementById('anunciador').innerHTML = '<h2>O jogador <span style = "color:red;font-weight:bold;">X</span> venceu a partida.<h2>'
            window.document.getElementById('posJogo').style.display = 'block'
            player = 1
            v += 1
            round.innerHTML += `<th>${v}º</th>`
            xPlacar.innerHTML += `<td>✔</td>`
            oPlacar.innerHTML += `<td></td>`
            vax = true
        }
    }else{
        vax = false
    } 
}

function arrayO(){
    if (verificacaoO.length > 2){
        if(spaceOn.textContent == 'O' && spaceTw.textContent == 'O' &&spaceThre.textContent == 'O' ||spaceFou.textContent == 'O' && spaceFiv.textContent == 'O' && spaceSi.textContent == 'O'||spaceSeve.textContent == 'O' && spaceEigh.textContent == 'O' &&spaceNin.textContent == 'O' ||spaceOn.textContent == 'O' && spaceFou.textContent == 'O' &&spaceSeve.textContent == 'O' ||spaceTw.textContent == 'O' && spaceFiv.textContent == 'O' &&spaceEigh.textContent == 'O'||spaceThre.textContent == 'O' && spaceSi.textContent == 'O' &&spaceNin.textContent == 'O' ||spaceOn.textContent == 'O' && spaceFiv.textContent == 'O' && spaceNin.textContent == 'O' || spaceThre.textContent == 'O' && spaceFiv.textContent == 'O' &&spaceSeve.textContent == 'O' ){
            valendo = false
            console.log(valendo) 
            window.document.getElementById('anunciador').innerHTML = '<h2>O jogador <span style = "color:red;font-weight:bold;">O</span> venceu a partida.<h2>'
            player = 0
            v++
            round.innerHTML += `<th>${v}º</th>`
            xPlacar.innerHTML += `<td></td>`
            oPlacar.innerHTML += `<td>✔</td>`
            window.document.getElementById('posJogo').style.display = 'block'
            vao = true
        }
    
    }else{
        vao = false
    }
    
}
function velha(){  
   if (vax == false && vao == false){ 
    window.document.getElementById('anunciador').innerHTML = '<h2>O jogo deu  <span style = "color:red;font-weight:bold;">EMPATE</span>.<h2>'
    velh = true
    v++
    round.innerHTML += `<th>${v}º</th>`
    xPlacar.innerHTML += `<td>E</td>`
    oPlacar.innerHTML += `<td>E</td>`
    window.document.getElementById('posJogo').style.display = 'block'
    }    
}

//Limpeza e Renicialização
function recomeçar(){
    console.log('ggez')
    let td = window.document.querySelectorAll('div#jogo td')
    for (let pos in td){
        td[pos].textContent = '' 
    }
    let p 
    if (player == 0){
        p = 'O'
    }else{
        p = 'X'
    }
    verificacaoO.length = 0
    verificacaoX.length = 0
    valendo = true
    vao = false
    vax = false
    velh = false
    window.document.getElementById('anunciador').innerHTML = `<h2>Agora é a vez do <span id="jogador" style="color:red;font-weight: bolder;">${p}</span> </h2>`
    window.document.getElementById('posJogo').style.display = 'none'
}
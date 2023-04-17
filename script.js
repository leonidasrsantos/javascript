let introducao = window.document.getElementById('introducao')
let moduloa = window.document.getElementById('moduloA')
let modulob = window.document.getElementById('moduloB')
let moduloc = window.document.getElementById('moduloC')
let modulod = window.document.getElementById('moduloD')
let moduloe = window.document.getElementById('moduloE')
let modulof = window.document.getElementById('moduloF')


function moduloA(){
    if(moduloa.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'block'
        modulob.style.display = 'none'
        moduloc.style.display = 'none'
        modulod.style.display = 'none'
        moduloe.style.display = 'none'
        modulof.style.display = 'none'
    }else{
        introducao.style.display = 'block'
        moduloa.style.display = 'none'
    }
}
function moduloB(){
    if(modulob.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'none'
        modulob.style.display = 'block'
        moduloc.style.display = 'none'
        modulod.style.display = 'none'
        moduloe.style.display = 'none'
        modulof.style.display = 'none'
    }else{
        introducao.style.display = 'block'
        modulob.style.display = 'none'
    }
}
function moduloC(){
    if(moduloc.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'none'
        modulob.style.display = 'none'
        moduloc.style.display = 'block'
        modulod.style.display = 'none'
        moduloe.style.display = 'none'
        modulof.style.display = 'none'
    }else{
        introducao.style.display = 'block'
        moduloc.style.display = 'none'
    }
}
function moduloD(){
    if(modulod.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'none'
        modulob.style.display = 'none'
        moduloc.style.display = 'none'
        modulod.style.display = 'block'
        moduloe.style.display = 'none'
        modulof.style.display = 'none'
    }else{
        introducao.style.display = 'block'
        modulod.style.display = 'none'
    }
}
function moduloE(){
    if(moduloe.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'none'
        modulob.style.display = 'none'
        moduloc.style.display = 'none'
        modulod.style.display = 'none'
        moduloe.style.display = 'block'
        modulof.style.display = 'none'
    }else{
        introducao.style.display = 'block'
        moduloe.style.display = 'none'
    }
}
function moduloF(){
    if(moduloa.style.display == 'none'){
        introducao.style.display = 'none'
        moduloa.style.display = 'none'
        modulob.style.display = 'none'
        moduloc.style.display = 'none'
        modulod.style.display = 'none'
        moduloe.style.display = 'none'
        modulof.style.display = 'block'
    }else{
        introducao.style.display = 'block'
        modulof.style.display = 'none'
    }
}
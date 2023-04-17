let num = window.document.getElementById('txtn')
let tab = window.document.getElementById('selectt') 
let resu = window.document.getElementById('res')
let array = []



function adicionar(){   
   let opt = window.document.createElement('option')
   let n = Number(num.value)
   
   if(n <= 0 || n >= 101 || n == ''){
    window.alert('O valor é invalido ou já encontrado na lista')
   }else{
    opt.text = `Você adicionou ${num.value}`
    tab.appendChild(opt)
    console.log(opt)
    array.push(num.value)
    console.log(array)
    txtn.value = '' 
   }
}

function finalizar(){
    let pos = array.length - 1 
    

    array.sort()
    resu.innerHTML = `<p>Ao todo temos ${array.length} números cadastrados</p>`
    resu.innerHTML += `<p>O maior valor informado foi ${array[pos]}</p>`
    resu.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`
    resu.innerHTML += `<p>Somando todos valores temos ${n1}</p>`
    resu.innerHTML += `<p>A media dos valores digítados é de ${1}</p>`
}
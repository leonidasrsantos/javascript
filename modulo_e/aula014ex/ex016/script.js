function contar(){
    var inicio = window.document.getElementById('inicioN')
    var fim = window.document.getElementById('fimN')
    var passo = window.document.getElementById('passoN')
    var res = window.document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando:<br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0){
            window.alert('[ERRO] Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f){
            for(i; i<=f; i+=p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }else{
            for(i;i>=f;i-=p){
                res.innerHTML += `${i} \u{1F449}`     
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


    
}
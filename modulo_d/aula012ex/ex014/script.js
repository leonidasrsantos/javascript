var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date
var hora =  data.getHours()
var minuto = data.getMinutes()
var dias = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 5 && hora < 12 ){
    img.src = 'manha.png'
    msg.innerHTML += '<p>Bom dia!</p>'
    document.body.style.background ='#eacfb0'
} else if ( hora >=12 && hora < 18){
    img.src = 'tarde.png'
    msg.innerHTML += '<p>Boa tarde!</p>'
    window.document.body.style.background = '#fd6728'
}else{
    img.src = 'noite.png'
    msg.innerHTML += '<p>Boa noite!</p>'
    window.document.body.style.background = '#122d50'
}

dia.innerHTML = `<p>${dias}/${mes}/${ano}</p>`
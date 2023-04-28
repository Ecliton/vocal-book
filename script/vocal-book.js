var titulo= document.getElementById('titulo')
var hora= document.getElementById('hora')

data= new Date()
var hr= data.getHours()
var mn= data.getMinutes()

if(mn<10){
    hora.innerHTML=`${hr}:0${mn}`
}else{
    hora.innerHTML=`${hr}:${mn}`
}

if(hr>5 && hr<=12){
    hora.style.color='#EAF205'
    titulo.style.color='#EAF205'
}else if(hr>12 && hr<=18){
    hora.style.color='#0D0D0D'
    titulo.style.color='#0D0D0D'
}else if(hr>18 && hr<=24){
    hora.style.color='#F2DFF2'
    titulo.style.color='#F2DFF2'
}else if(hr>=0 && hr<=5){
    hora.style.color='#0D0D0D'
    titulo.style.color='#0D0D0D'
}
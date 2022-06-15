var nombre=prompt("Para continuar ingrese su nombre:")
alert("Bienvenido a mi página Web "+nombre+",espero te sea útil esta información para crear consciencia sobre esta problemática y hacer algo al respecto, si te gustó no dudes en enviarnos un comentario :)");
const days={
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
}
var fecha= prompt(nombre+ " ingrese su fecha de nacimiento como AAAA/MM/DD y sabrá el día de la semana en que nació");
let birthday= new Date(fecha); 
alert(nombre+" naciste un "+ 
days[birthday.getDay()]);
var colores = ['rojo','azul','verde'];
console.log(colores);
colores.push('negro','blanco');
console.log(colores);
//Interacción con HTML
var opciones ='';
var tabla='';
for (var i=0; i< colores.length;i++){
    opciones += '<option value="' + i + '">'+ colores[i] + '</option>';
    tabla += '<tr><td>' +(i+1) + '</td><td>'+ colores[i]+'</td></tr>';
}
document.queryselector('#combo1').innerHTML = opciones;
document.querySelector('#body').innerHTML = tabla;
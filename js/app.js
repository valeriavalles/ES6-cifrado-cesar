//Solicito una frase que será mi paramtero de entrada.

let phraseText= prompt('Ingrese una frase');

/*var cifrado = document.getElementById('cifrado-text');
var btn = document.getElementById('btn-click');*/

//Valido que si no ingresa ninguna cadena me vuelva a pedir

  while( isNaN(phraseText) !== true || phraseText===' ' ) {
    // alert('Error. Intente nuevamente.');
     
     let phraseText= prompt('Ingrese una frase');
     
   }


/*btn.addEventListener('click', function(){
  var t = cifrado.value;
  document.write('La frase ingresada es:  '+t);
 // console.log(t);
  cifrado.value = '';
 });*/


//Muestro la frase ingresada
//document.write('La frase ingresada es:  '+text);

//Creando mi función cifrado
let cipher = (phrase) => {

  //declaro las variables que utilizaré para almacenar mis valores
  let codAscii;
  let cipCesar;
  let newPhrase="";

  //Bucle que me sirve para obtener convertir mi frase y cifrarla.
  for(let i=0; i<phrase.length; i++){
    //Obtengo el código ascii de la letra en su posición i
    codAscii=phrase.charCodeAt(i);
    //Verifico si la frase ingresada está escrita en mayúscula
    if(phrase.toUpperCase()===phrase){
    // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
     cipCesar=(codAscii-65+33)%26+65;
   }else{
    //Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
     cipCesar=(codAscii-97+33)%26+97;
   }

   //Convierte el codigo ASCII a una letra
    let cad=String.fromCharCode(cipCesar);
  //Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
    newPhrase=newPhrase.concat(cad);
  }
  //Retorna la cadena total de todas las letras convertidas
  return newPhrase;
}

//Muestra la frase cifrada
document.write('<br>' +'La frase cifrada es:  '+ cipher(phraseText));

let newPhrase=cipher(phraseText);

//Creando mi función descifrar;
let decipher = (newPhrase) => {
  let acum;
  let valor;
  let descipherPhrase='';
//Bucle que me sirve para obtener convertir mi frase y descifrarla.
  for(var i=0; i<newPhrase.length; i++){
    //Obtengo el código ascii de la letra en su posición i
    acum=newPhrase.charCodeAt(i);
    //Verifico si la frase ingresada está escrita en mayúscula
    if(newPhrase.toUpperCase()===newPhrase){
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
      valor=(acum+65+33)%26+65;
    }else{
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
      valor=(acum+97+33)%26+97;
    }

    //Convierte el codigo ASCII a una letra
    let str=String.fromCharCode(valor);
    //Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
    descipherPhrase=descipherPhrase.concat(str);
  }
  //Retorna la frase descifrada
  return descipherPhrase;
}
//Muestro la frase descifrada en la página
document.write('<br>' +'La frase decifrada es:  '+ decipher(newPhrase));

console.log(phraseText);
console.log(cipher(phraseText));
console.log(decipher(newPhrase));


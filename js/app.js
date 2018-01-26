window.addEventListener('load', function() {
// Solicito una frase que será mi paramtero de entrada.

// let phraseText= prompt('Ingrese una frase');

  let cifrado = document.getElementById('cifrado-text');
  let btn = document.getElementById('btn-click');
  let cipherText = document.getElementById('cipher-text');
  //let t = cifrado.value;
    
  // Muestro la frase ingresada
  // document.write('La frase ingresada es:  '+text);

  // Creando mi función cifrado
  const cipher = (phrase) => {
  // declaro las variables que utilizaré para almacenar mis valores
    let codAscii;
    let cipCesar;
    let newPhrase = '';

    // Bucle que me sirve para obtener convertir mi frase y cifrarla.
    for (let i = 0; i < phrase.length; i++) {
    // Obtengo el código ascii de la letra en su posición i
      codAscii = phrase.charCodeAt(i);
      // Verifico si la frase ingresada está escrita en mayúscula
      if (phrase.toUpperCase() === phrase) {
        // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
        cipCesar = (codAscii - 65 + 33) % 26 + 65;
      } else {
        // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
        cipCesar = (codAscii - 97 + 33) % 26 + 97;
      }

      // Convierte el codigo ASCII a una letra
      let cad = String.fromCharCode(cipCesar);
      // Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
      newPhrase = newPhrase.concat(cad);
    }
    // Retorna la cadena total de todas las letras convertidas
    return newPhrase;
  };

  // Muestra la frase cifrada
 // cipherText.innerHTML =   'La frase cifrada es:  ' + t;
  // document.write('<br>' +'La frase cifrada es:  '+ cipher(cifrado.value));
// console.log(t);

  // let newPhrase = cipher(t);


  // Creando mi función descifrar;
/*  let decipher = (newPhrase) => {
    let acum;
    let valor;
    let descipherPhrase = '';
    // Bucle que me sirve para obtener convertir mi frase y descifrarla.
    for (var i = 0; i < newPhrase.length; i++) {
    // Obtengo el código ascii de la letra en su posición i
      acum = newPhrase.charCodeAt(i);
      // Verifico si la frase ingresada está escrita en mayúscula
      if (newPhrase.toUpperCase() === newPhrase) {
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
        valor = (acum + 65 + 33) % 26 + 65;
      } else {
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
        valor = (acum + 97 + 33) % 26 + 97;
      }

      // Convierte el codigo ASCII a una letra
      let str = String.fromCharCode(valor);
      // Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
      descipherPhrase = descipherPhrase.concat(str);
    }
    // Retorna la frase descifrada
    return descipherPhrase;
  };
  // Muestro la frase descifrada en la página
  // document.write('<br>' + 'La frase decifrada es:  ' + decipher(t));*/

  console.log(cipher(prompt('Ingresa tu cadena a cifrar')));
  // console.log(t);
  // console.log(cipher(t));
  //console.log(decipher(t));
  btn.addEventListener('click', (event) => {
    let t = cifrado.value;
    cipher(t);
    cipherText.innerHTML = t;
    
    // console.log(t);
    cifrado.value = '';
  });
});

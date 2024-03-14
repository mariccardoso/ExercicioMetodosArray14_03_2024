//Atividade JS - Arrays e Github

//Declarar os Arrays
let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['x', 'y', 'z'];

//Método 01: .concat()
//O método concat() é usado para combinar dois ou mais arrays em um único array.

//sintaxe 
//array1.concat(array2)

//Testes práticos:
let array3 = array1.concat(array2);
console.log(array3);

let array4 = array1.concat(array2, array3);
console.log(array4);


//Metodo 02: .join()
//O método join() é usado para criar uma string a partir dos elementos de um array.
//O método join() junta os elementos do array em uma única string, separando cada elemento com um separador especificado.

//Sintaxe:
//join()
//join(separador)

//Testes práticos:
let equipe = ['Júlia', 'Vinicius', 'Fernanda', 'Rayssa', 'Mariana']

//Mostrar os elementos da seguinte forma: Júlia,Vinicius,Fernanada,Rayssa,Mariana
console.log(equipe.join());

//Separar os elementos da seguinte forma: Júlia-Vinicius-Fernanada-Rayssa-Mariana
console.log(equipe.join('-'))


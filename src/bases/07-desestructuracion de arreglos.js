const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , per3] = personajes;

console.log(per3);

const retornaArreglo = () =>{
    return ['ABC',123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const estado = (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = estado('Goku');
console.log(nombre);
setNombre();
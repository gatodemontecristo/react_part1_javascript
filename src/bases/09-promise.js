import getHeroeById, {
  getHeroesByOwner,
} from "./08-import-export-funciones-comunes";
// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//        //tarea
//         const p1 = getHeroeById(2);
//         // resolve(p1);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// })
// .catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) resolve(p1);
      else reject("No se encontro heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(10)
  .then((heroe) => console.log("Heroe", heroe))
  .catch(console.error);

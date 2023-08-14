//import {heroes} from './data/heroes'

import  heores,{owners} from "../data/heroes";
// console.log(owners);

const getHeroeById = (id) =>{
    return heores.find((heroe)=>heroe.id===id);
}
// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>{
    return heores.find((heroe)=>heroe.owner===owner);
}

// console.log(getHeroesByOwner('DC'));
export{
    getHeroeById as default,
    getHeroesByOwner
}
import React, { useEffect, useState } from 'react';
import axios from "axios";
import PokemonCards from './Pokemon Cards';

const PokemonApp = () => {
 const [pokemonData, setPokemonData] = useState([]);
 const [filterData, setFilterData] = useState();
 const fetchPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  const pokemonData = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonRecord = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image: pokemonRecord.data.sprites.front_default,
      };
    })
  );
  setPokemonData(pokemonData);
};
  useEffect(() => {
    fetchPokemons();
  }, [])
  const filter = pokemonData?.filter((element)=> (
    filterData 
    ?
    element?.name?.toLowerCase()?.includes(filterData)
    :
    true
  ));
console.log(filterData);

  return (
    <div className='w-full h-screen flex flex-col items-center  bg-slate-50 py-4'>
         <div className='flex items-center justify-evenly py-5  bg-green-300 rounded-3xl  w-11/12'>
         <input placeholder='Search' onChange={(e)=> setFilterData((e.target.value).toLowerCase())} className='w-2/3 border border-gray-600 py-1 px-3'/>
      </div>
      <div className='w-full flex items-center py-16 justify-center'>
      <div className="flex flex-wrap overflow-auto items-center justify-evenly gap-4 sm:gap-16 drop-shadow-2xl w-11/12 ">
        {filter.length >0 
        ?
        filter.map((item)=>(
          <PokemonCards cardItem={item}/>
        ))
      :
      <h1 className='text-3xl text-red-500 font-semibold'>No result</h1>
      }
      </div>
      </div>
    </div>
  )
}

export default PokemonApp
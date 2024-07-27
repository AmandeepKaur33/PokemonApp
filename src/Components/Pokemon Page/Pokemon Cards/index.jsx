import React from 'react'

const PokemonCards = ({cardItem}) => {
  return (
    <div className=' w-1/4 h-44 cursor-pointer  flex transition-all group hover:scale-125 '>
      <div className='w-full h-full bg-white group-hover:bg-green-500 flex items-center relative justify-center '>
        <img src={cardItem?.image} className='w-44 h-44' alt="" />
        <div className='absolute flex justify-center items-center bg-green-500 group-hover:bg-white w-2/5 h-1/4 rounded-ss-full bottom-0 right-0'>
      <h1 className='text-xl text-green-100 group-hover:text-green-500'>{cardItem?.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default PokemonCards
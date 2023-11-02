import React from 'react'

const Position = ({title, image}) => {
  return (
    <div class = "flex flex-col items-center justify-center">
      <img class = "w-28 h-30 rouded-full" src = {image} alt = ""/>
      <h1 class = "text-2xl font-serif">{title}</h1>
    </div>
  )
}

export default Position

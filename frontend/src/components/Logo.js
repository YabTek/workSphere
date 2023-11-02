import React from 'react'
import logoImg from '../assets/logoImg.png'

const Logo = () => {
  return (
    <div class = "flex p-12">
      <img class = "w-12 h-12 rouded-full" src = {logoImg} alt = "logo"/>
      <p class = "text-2xl text-[#56AAAA] py-3">work</p>
      <p class = "text-3xl text-[#C882C6] py-2">Sphere</p>
    </div>
  )
}

export default Logo

import React from 'react'

const Card = ({title,description,salary,hours}) => {
  return (
    <div class="bg-[#D3DEF9] rounded-[18px] shadow-md p-8 mx-20 my-12">
      <h2 class="text-xl font-semibold mb-4">{title}</h2>
      <p class="text-black mb-1"><span class="font-semibold">Salary:</span>  {salary}</p>
      <p class="text-black mb-1"><span class="font-semibold">Description:</span>  {description}</p>
      <p class="text-black"><span class="font-semibold">Hours per Week:</span>  {hours}</p>
    </div>
  )
}

export default Card

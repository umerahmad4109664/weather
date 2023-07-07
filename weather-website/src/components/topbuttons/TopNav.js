import React from 'react'

const TopNav = () => {

    const cities=[
        {
            id:1,
            title:'Karachi'
        },
        {
            id:2,
            title:'Lahore'
        },
        {
            id:3,
            title:'Islamabad'
        },
        {
            id:4,
            title:'Quetta' 
        },
        {
            id:5,
            title:'Peshawar'
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
    {cities.map((city)=>(
      
      <button key={city.id}className='text-white text-lg font-medium '>{city.title} </button>
    ))}
</div>  )
}

export default TopNav
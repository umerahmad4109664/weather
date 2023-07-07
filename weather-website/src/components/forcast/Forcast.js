import React from 'react'

const Forcast = ({title}) => {
  return (
    <>
    <div className='flex items-center justify-center mt-6'>
        <p className=' text-white font-medium uppercase'>{title}</p>
    </div>
    <hr className=' my-2 '/>
    
    <div className='flex flex-row items-center justify-between text-white'>
        
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className=' w-12 my-1' alt="" />
            <p className=' font-medium '>22°</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className=' w-12 my-1' alt="" />
            <p className=' font-medium '>22°</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className=' w-12 my-1' alt="" />
            <p className=' font-medium '>22°</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className=' w-12 my-1' alt="" />
            <p className=' font-medium '>22°</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>04:30 PM</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className=' w-12 my-1' alt="" />
            <p className=' font-medium '>22°</p>
        </div>
    </div>
    
    </>
  )
}

export default Forcast
import React from 'react'
import { AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown } from 'react-icons/ai'
import { CiTempHigh} from 'react-icons/ci'
import {BiSolidDroplet } from 'react-icons/bi'
import {FiWind } from 'react-icons/fi'
import {BsSunrise } from 'react-icons/bs'
import {BsSunset } from 'react-icons/bs'


const TemperatureAndDetails = () => {
  return (
    <>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy</p>
    </div>
    <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" className='w-20' />
        <p className=' text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <CiTempHigh size={18} className=' mr-1'/>
                Real feel:
                <span className=' font-medium ml-1'>32°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <BiSolidDroplet size={18} className=' mr-1'/>
                Humidity:
                <span className=' font-medium ml-1'>65%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <FiWind size={18} className=' mr-1'/>
                Wind Speed:
                <span className=' font-medium ml-1'>11 km/h</span>
            </div>
        </div>
    </div>

    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

        <BsSunrise/>
        <p className='font-light'> 
        Rise: <span className=' font-medium ml-1'>06:45 AM</span>
        </p>
        <p className=' font-light'>|</p>
        <BsSunset/>
        <p className='font-light'> 
        Set: <span className=' font-medium ml-1'>07:35 PM</span>
        </p>
        <p className=' font-light'>|</p>
        <BsSunrise/>
        <p className='font-light'> 
        High: <span className=' font-medium ml-1'>45°</span>
        </p>
        <p className=' font-light'>|</p>
        <BsSunrise/>
        <p className='font-light'> 
        Low: <span className=' font-medium ml-1'>30°</span>
        </p>
        
    </div>
    </>
  )
}

export default TemperatureAndDetails
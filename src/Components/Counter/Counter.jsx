import React from 'react'
import './styles/Counter.scss'
import useCounter from './hooks/useCounter'

export default function Counter({countDownDate}) {
    const { days, hours, minutes, seconds } = useCounter({ countDownDate });
  return (
    <>
        <div className='counterContainer'> 
            <div className='title'>
                <h3>FALTAN</h3>
            </div>
            <div className='items'>
                <div className='counterItem'><span><b>{days}</b></span><span>DÍAS</span></div>
                <div className='counterItem'><span><b>{hours}</b></span><span>HRS</span></div>
                <div className='counterItem'><span><b>{minutes}</b></span><span>MIN</span></div>
                <div className='counterItem'><span><b>{seconds}</b></span><span>SEG</span></div>
            </div>
        </div>
    </>
  )
}

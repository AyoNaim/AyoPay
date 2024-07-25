import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
    <div> 
        <CountUp
            prefix='$'
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter
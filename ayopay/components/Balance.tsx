'use client'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import Chart from './Chart'

const Balance = ({accounts=[], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <div className='total-balance'>
        <div className="total-balance-chart">
          <Chart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='header-2'>
            Bank Accounts: { totalBanks} 
          </h2>
            <p className="total-balance-label">
                Total Current Balance
            </p>
            <p className="total-balance-amount flex-center gap-2">
              $<CountUp end={totalCurrentBalance} />
            </p>
        </div>

    </div>
  )
}

export default Balance
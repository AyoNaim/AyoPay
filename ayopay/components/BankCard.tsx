import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance} : CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href={'./'} className='bank-card'>
            <div className='bank-card_content'>
                <div>
                  <h1 className='text-16 font-semibold text-white'>
                    {/* {account.name} */}Ayomide
                  </h1>
                  <p className='font-ibm-plex-serif font-black text-white'>
                    {/* {account.currentBalance} */} $57
                  </p>
                </div>
                <article className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <h1 className='text-12 font-semibold text-white'>
                      {/* {userName} */} Ayo
                    </h1>
                    <h2 className='text-12 font-semibold text-white'>
                      10/12
                    </h2>
                  </div>
                  <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  ◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className='text-16'>{account.mask}</span>
                  </p>
                </article>
            </div>
            <div className='bank-card_icon'>
              <Image src={'./Paypass.svg'} alt='paypass' width={20} height={24} />
              <Image src={'./mastercard.svg'} alt='paypass' width={45} height={32} />
              <Image src={'/lines.png'} alt='paypass' width={319} height={190} className='absolute top-0 left-0' />
            </div>
        </Link>
    </div>
  )
}

export default BankCard
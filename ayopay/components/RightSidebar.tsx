import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'


const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  const username  = {firstname:'Ayo', lastname:'mide', email: 'ayonaim101@gmail.com'}
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-6'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-semibold text-blue-500'>{username.firstname[0]} </span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>
              {username.firstname} {username.lastname}
            </h1>
            <p className='profile-email'>{username.email}</p>
          </div>
        </div>
      </section>
      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className="header-2">My banks</h2>
          <Link href={'./'} className='flex gap-2'>
            <Image 
              src={'./plus.svg'}
              alt='plus'
              width={15}
              height={15}
            />
            <h2 className='text-gray-600'>Add Bank</h2>
          </Link>
        </div>
        <div>
          {
            banks?.length > 0 && (
              <div className='relative flex flex-col flex-1 justify-center items-center gap-5'>
                <div className='relative z-10'>
                  <BankCard
                    key={banks[0].id}
                    account={banks[0]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
                banks[1] ? && (
                  <div className='absolute right-0 top-8 z-0 w-[90%]'>
                  <BankCard
                    key={banks[1].id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                  </div>
                )
              </div>
            )
          }
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar
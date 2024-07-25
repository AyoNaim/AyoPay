import React from 'react'

interface headerProps {
    type: 'greeting',
    title: string,
    subText: string,
    user?: string
}

const Header = ({ type, title, subText, user}: headerProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title flex gap-2'>
            {title}
            {
                type == 'greeting' && <span className='text-bankGradient'>
                    {user}
                </span> 
            }
        </h1>
        <p className="header-box-subText">{subText}</p>
    </div>
  )
}

export default Header
import React from 'react'

export default function Mail() {
  return (
    <div className='mail-item'>
     <input className='mail-checkbox' type='checkbox'></input>
     <span className='sender-name'>Sadiq</span>
     <span className='mail-content'>This is the mail content</span>
     <span className='date'>12 March</span>
    </div>
  )
}

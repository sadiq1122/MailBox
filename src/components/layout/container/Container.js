import React from 'react'
import MailContainerHeader from '../../feature/mail-header/MailContainerHeader'
import MailList from '../../feature/Mail/MailList'

export default function Container() {
  return (
    <div className='mail-container'>
    <MailContainerHeader />
    <MailList />
    </div>
  )
}

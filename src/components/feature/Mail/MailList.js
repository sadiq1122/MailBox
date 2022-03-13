import React from 'react'
import Mail from './Mail'

export default function MailList() {
    const list = [
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        },
        {
            read:false,
            content:'',
            from:'',
            to:'',
            date:''
        }
    ]

    const mailList = list.map(i => <Mail/>)
  return (
    <div className='mail-list'>
        {mailList}
    </div>
  )
}

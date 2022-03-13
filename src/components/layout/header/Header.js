import React from 'react'
import '../../../assets/css/style.css'

export default function Header(
    {
        newMsgCount,
        notificationsCount = 1
    }) {
    return (
        <div className='header-container' style={{display:'flex', justifyContent:'space-between' , border:'1px solid grey'}}>
            <span className='item' style={{marginLeft:'10px', cursor:'pointer'}}>
            <i class="bi bi-list" style={{color:'white', fontSize:'22px' ,background:'teal' , padding:'5px'}}></i>
            </span>
            <div className='header'>
                <span className='item'>
                    <span className='notify'>5</span>
                    <i class="bi bi-envelope-fill" style={{ color: 'grey', fontSize: '19px', cursor: 'pointer' }}></i>
                </span>
                <span className='item'>
                    <span className='notify' style={{background:'teal' , color:'white'}}>5</span>
                    <i class="bi bi-bell-fill" style={{ color: 'grey', fontSize: '19px', cursor: 'pointer' }}></i>
                </span>
                <span className='item'>
                    <i class="bi bi-box-arrow-right" style={{ color: 'grey', fontSize: '19px', cursor: 'pointer' }}></i>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '13px', marginLeft: '8px' }}>Log Out</span>
                </span>
            </div>
        </div>
    )
}

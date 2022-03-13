import React from 'react'

export default function MailContainerHeader() {
    return (
        <div className='mail-container-header'>
            <div className='search-container'>
                <h3>Inbox(5)</h3>
                <span><input type='text' placeholder='Search Mail'></input>
                <button className='search-btn'>Search</button></span>
            </div>

            <div className='page-controls'>
                <div>
                    <span className='page-btns'><i class="bi bi-arrow-repeat" style={{marginRight:'8px'}}></i> <span>Refresh</span></span>
                    <span className='page-btns'><i class="bi bi-eye-fill"></i></span>
                    <span className='page-btns'><i class="bi bi-exclamation-lg"></i></span>
                    <span className='page-btns'><i class="bi bi-trash3"></i></span>
                </div>
                <div>
                <span className='page-btns'><i class="bi bi-arrow-left"></i></span>
                <span className='page-btns'><i class="bi bi-arrow-right"></i></span>

                </div>
            </div>

        </div>
    )
}

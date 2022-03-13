import React from 'react'

export default function Category() {
  return (
    <div>
      <h6>CATEGORIES</h6>
      <ul className='category-list'>
        <li className='category-list-item'><i class="bi bi-circle-fill" style={{marginRight:'10px',color:'green'}}></i> <span>Work</span></li>
        <li className='category-list-item'><i class="bi bi-circle-fill" style={{marginRight:'10px',color:'red'}}></i><span>Documents</span></li>
        <li className='category-list-item'><i class="bi bi-circle-fill" style={{marginRight:'10px',color:'blue'}}></i><span>Advertisement</span></li>
        <li className='category-list-item'><i class="bi bi-circle-fill" style={{marginRight:'10px',color:'teal'}}></i><span>Socail</span></li>
        <li className='category-list-item'><i class="bi bi-circle-fill" style={{marginRight:'10px',color:'orange'}}></i><span>Clients</span></li>

      </ul>
    </div>
  )
}

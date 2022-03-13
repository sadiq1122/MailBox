import React from 'react'

export default function Folder() {
  return (
    <div>
        <h6>FOLDERS</h6>
        <ul className='category-list'>
            <li className='folder-list-item'><i style={{marginRight:'10px'}} class="bi bi-inbox-fill"></i><spam>Inbox</spam></li>
            <li className='folder-list-item'><i style={{marginRight:'10px'}} class="bi bi-envelope"></i><spam>Sent</spam></li>
            <li className='folder-list-item'><i style={{marginRight:'10px'}} class="bi bi-brightness-low-fill"></i><spam>Important</spam></li>
            <li className='folder-list-item'><i style={{marginRight:'10px'}} class="bi bi-file-earmark-text"></i><spam>Draft</spam></li>
            <li className='folder-list-item'><i style={{marginRight:'10px'}} class="bi bi-trash"></i><spam>Trash</spam></li>

        </ul>
    </div>
  )
}

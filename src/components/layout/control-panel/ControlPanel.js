import React from 'react'
import Category from '../../feature/categories/Category'
import Folder from '../../feature/folders/Folder'
import Label from '../../feature/labels/Label'

export default function ControlPanel() {
  return (
    <div className='control-panel'>
        <button className='btn compose-btn'>Compose Mail</button>
        <Folder/>
        <Category/>
        <Label/>
    </div>
  )
}
  
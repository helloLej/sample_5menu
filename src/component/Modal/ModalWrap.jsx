import React from 'react'

export default function ModalWrap({ children }) {
  return (
    <div className='modal_background'>
      <div className='modal_wrap'>
        {children}
      </div>
    </div>
  )
}

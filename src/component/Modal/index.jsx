import React, { useState } from 'react'
import './style.css'
import ModalWrap from './ModalWrap'
import ModalCont from './ModalCont'

export default function Modal() {
  const [show, setShow] = useState(false)

  function handleModal() {
    setShow(!show)
  }

  return (
    <>
      <button className="modal_btn" onClick={handleModal}>
        Show Modal
      </button>
      {show && (
        <ModalWrap>
          <ModalCont handleModal={handleModal} />
        </ModalWrap>
      )}
    </>
  )
}

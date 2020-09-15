import React from 'react'

export default function ModalCont({handleModal}) {
  return (
    <div className="modal_cont">
      <h2 className="modal_cont__h2">Modal Header</h2>
      <p>Modal body</p>
      <button className="modal_ok_btn" onClick={handleModal}>OK</button>
    </div>
  )
}

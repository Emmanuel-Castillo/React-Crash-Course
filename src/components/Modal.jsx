import './Modal.css'

function Modal(props) {
  return(
    <div>
  <div className="modal">
    <p className="modal__title">{props.title}</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={props.onCancelProperty}>Cancel</button>
      <button className="btn" onClick={props.onConfirmProperty}>Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</div>
  )
}

export default Modal
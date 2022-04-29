import React from "react";

function Modal({ type, msg, handleClick }) {
  return (
    <div className="modal fade" tabIndex="-1" id="info-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Atención</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{msg}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleClick}
            >
              Sí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

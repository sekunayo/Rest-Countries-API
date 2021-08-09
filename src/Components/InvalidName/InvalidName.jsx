import React from 'react'

function InvalidName({closeModal,children}) {
    return (
        <div className="modal-error-message" onClick={closeModal}>
            <div className="error-message">
                <div className="error-message-close-icon">
                    <i class="fas fa-times" onClick={closeModal}></i>
                </div>
                <p className="error-message-description">{children}</p>
            </div>
        </div>
    )
}

export default InvalidName

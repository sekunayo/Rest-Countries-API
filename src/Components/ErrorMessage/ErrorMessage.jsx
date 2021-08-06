import React from 'react'

function ErrorMessage(props) {
    return (
        <div className="modal-error-message">
            <div className="error-message">
                <p className="error-message-description">{props.children}</p>
            </div>
        </div>
    )
}

export default ErrorMessage

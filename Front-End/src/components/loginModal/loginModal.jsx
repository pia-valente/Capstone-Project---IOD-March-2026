import React from "react";
import "./loginModal.css";

// put loginBox in children
function LoginModal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // does not render anything if the modal is closed

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        // only close if clicking directly on the overlay
        if (e.target === e.currentTarget) onClose();
      }}
    >
        {children}
    </div>
  );
}

export default LoginModal;
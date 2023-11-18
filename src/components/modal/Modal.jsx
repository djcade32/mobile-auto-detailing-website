import React, { useEffect, useRef } from "react";
import "./ModalStyles.css";
import ReactPortal from "../../helpers/reactPortal/ReactPortal";
import { CSSTransition } from "react-transition-group";

function Modal({ children, isOpen, handleClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal" style={{ opacity: isOpen ? 1 : 0, zIndex: isOpen ? 999 : -1 }}>
        <CSSTransition
          in={isOpen}
          timeout={{ entry: 0, exit: 300 }}
          unmountOnExit
          classNames="modal__content"
          nodeRef={ref}
        >
          <div ref={ref} className="modal__content">
            {children}
          </div>
        </CSSTransition>
      </div>
    </ReactPortal>
  );
}
export default Modal;

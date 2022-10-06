import React, { useCallback, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Modal.module.css';

// * используем портал
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  const context = useContext(ContextUser);
  const isShowModal = context?.isShowModal;
  const onShowModal = context?.setIsShowModal;

  const closeModal = useCallback(() => {
    onShowModal(false);
  }, [onShowModal]);

  useEffect(() => {
    function onCloseKeyEvent(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }
    window.addEventListener('keydown', onCloseKeyEvent);
    return () => {
      window.removeEventListener('keydown', onCloseKeyEvent);
    };
  }, [isShowModal, closeModal]);

  function onCloseOverlay(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return createPortal(
    <div className={style.overlay} onClick={onCloseOverlay}>
      <div className={style.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

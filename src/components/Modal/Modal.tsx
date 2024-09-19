import { useEffect } from 'react';
import { ICustomModal } from './type';
import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '400px',
    maxWidth: '600px',
    width: '100%',
  },
};

export const CustomModal = ({ modalIsOpen, src, alt, closeModal }: ICustomModal) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};

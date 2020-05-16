import React from 'react';
import './defaultideas.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalScience from '../Modals/ModalScience';
import ModalMusic from '../Modals/ModalMusic';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function DefaultIdeas() {
  const [openScienceModal, setScienceModalOpen] = React.useState(false);
  const [modalMusicIsOpen, setMusicModalOpen] = React.useState(false);

  function openModal() {
    setScienceModalOpen(true);
  }
  function closeScienceModal() {
    setScienceModalOpen(false);
  }
  function openMusicModal() {
    setMusicModalOpen(true);
  }
  function closeMusicModal() {
    setMusicModalOpen(false);
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={openScienceModal}
        onRequestClose={closeScienceModal}
        style={customStyles}
      >
        <ModalScience />
        <button onClick={closeScienceModal}>close</button>
      </Modal>
      <Modal
        isOpen={modalMusicIsOpen}
        onRequestClose={closeMusicModal}
        style={customStyles}
      >
        <ModalMusic />
        <button onClick={closeMusicModal}>close</button>
      </Modal>
      <div className="ideas-headers-container">
        <div className="idea-header social"> social </div>
        <p className="idea-header art"> art</p>
        <p className="idea-header music" onClick={openMusicModal}>
          {' '}
          music
        </p>
        <p className="idea-header science" onClick={openModal}>
          {' '}
          science
        </p>
        <p className="idea-header games">games</p>
        <p className="idea-header cooking">cooking</p>
      </div>
    </React.Fragment>
  );
}

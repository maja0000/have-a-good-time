import React from 'react';
import './defaultideas.css';
import Modal from 'react-modal';
import ModalScience from '../Modals/ModalScience';
import ModalMusic from '../Modals/ModalMusic';
import ModalSocial from '../Modals/ModalSocial';
import ModalArt from '../Modals/ModalArt';
import ModalGames from '../Modals/ModalGames';
import ModalCooking from '../Modals/ModalCooking';

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
  const [modalSocialIsOpen, setSocialModalOpen] = React.useState(false);
  const [modalArtIsOpen, setArtModalOpen] = React.useState(false);
  const [modalGamesIsOpen, setGamesModalOpen] = React.useState(false);
  const [modalCookingIsOpen, setCookingModalOpen] = React.useState(false);

  function openModal() {
    setScienceModalOpen(true);
  }
  function closeScienceModal() {
    setScienceModalOpen(false);
  }

  function openArtModal() {
    setArtModalOpen(true);
  }
  function closeArtModal() {
    setArtModalOpen(false);
  }

  function openMusicModal() {
    setMusicModalOpen(true);
  }
  function closeMusicModal() {
    setMusicModalOpen(false);
  }
  function openSocialModal() {
    setSocialModalOpen(true);
  }
  function closeSocialModal() {
    setSocialModalOpen(false);
  }
  function openGamesModal() {
    setGamesModalOpen(true);
  }
  function closeGamesModal() {
    setGamesModalOpen(false);
  }
  function openCookingModal() {
    setCookingModalOpen(true);
  }
  function closeCookingModal() {
    setCookingModalOpen(false);
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
      <Modal
        isOpen={modalSocialIsOpen}
        onRequestClose={closeSocialModal}
        style={customStyles}
      >
        <ModalSocial />
        <button onClick={closeSocialModal}>close</button>
      </Modal>
      <Modal
        isOpen={modalArtIsOpen}
        onRequestClose={closeArtModal}
        style={customStyles}
      >
        <ModalArt />
        <button onClick={closeArtModal}>close</button>
      </Modal>
      <Modal
        isOpen={modalGamesIsOpen}
        onRequestClose={closeGamesModal}
        style={customStyles}
      >
        <ModalGames />
        <button onClick={closeGamesModal}>close</button>
      </Modal>
      <Modal
        isOpen={modalCookingIsOpen}
        onRequestClose={closeCookingModal}
        style={customStyles}
      >
        <ModalCooking />
        <button onClick={closeCookingModal}>close</button>
      </Modal>
      <div className="ideas-headers-container">
        <p className="idea-header social" onClick={openSocialModal}>
          social{' '}
        </p>
        <p className="idea-header art" onClick={openArtModal}>
          {' '}
          art
        </p>
        <p className="idea-header music" onClick={openMusicModal}>
          {' '}
          music
        </p>
        <p className="idea-header science" onClick={openModal}>
          {' '}
          science
        </p>
        <p className="idea-header games" onClick={openGamesModal}>
          games
        </p>
        <p className="idea-header cooking" onClick={openCookingModal}>
          cooking
        </p>
      </div>
    </React.Fragment>
  );
}

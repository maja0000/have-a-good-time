import React, { Fragment } from 'react';
import './defaultideas.css';
import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from '../Modals/ModalContext';
import ModalRoot from '../Modals/ModalRoot';

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
    borderRadius: '30px',
  },
};
const ModalSocialOpen = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalSocial />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);

const ModalArtOpen = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalArt />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);
const ModalMusicOpen = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalMusic />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);
const ModalScienceOpen = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalScience />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);
const ModalGamesOpen = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalGames />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);
const ModalCookingOpen = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalCooking />
    <button onClick={onRequestClose}>close</button>
  </Modal>
);

export default function DefaultIdeas() {
  return (
    <React.Fragment>
      <ModalProvider>
        <ModalRoot />
        <ModalConsumer>
          {({ showModal }) => (
            <Fragment>
              <div className="ideas-headers-container">
                <p
                  className="idea-header social"
                  onClick={() => showModal(ModalSocialOpen)}
                >
                  social{' '}
                </p>
                <p
                  className="idea-header art"
                  onClick={() => showModal(ModalArtOpen, { foo: 'bar' })}
                >
                  art
                </p>
                <p
                  className="idea-header music"
                  onClick={() => showModal(ModalMusicOpen)}
                >
                  music
                </p>
                <p
                  className="idea-header science"
                  onClick={() => showModal(ModalScienceOpen)}
                >
                  {' '}
                  science
                </p>
                <p
                  className="idea-header games"
                  onClick={() => showModal(ModalGamesOpen)}
                >
                  games
                </p>

                <p
                  className="idea-header cooking"
                  onClick={() => showModal(ModalCookingOpen)}
                >
                  cooking
                </p>
              </div>
            </Fragment>
          )}
        </ModalConsumer>
      </ModalProvider>
    </React.Fragment>
  );
}

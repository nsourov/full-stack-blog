import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from './PostForm';
import { toggleGuestPostModal } from '../../state/ducks/blogs';

const GuestPostModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.guestPost);

  const toggle = () => dispatch(toggleGuestPostModal());

  return (
    <Modal isOpen={modal} toggle={toggle} size='lg'>
      <ModalHeader toggle={toggle}>Create Guest Post</ModalHeader>
      <ModalBody>
        <div className='container'>
          <PostForm />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default GuestPostModal;

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { store } from 'react-notifications-component';

import { requestEditor } from '../../api';

const RequestEditor = () => {
  const [loading, setLoading] = useState(false);
  const handelClick = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwtToken');
      await requestEditor(token);
      setLoading(false);
      store.addNotification({
        message: 'Request editor successfully!',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Button onClick={handelClick} color='success'>
      {loading && <i className='fa fa-spinner fa-pulse fa-fw'></i>}
      Request Editor
    </Button>
  );
};

export default RequestEditor;

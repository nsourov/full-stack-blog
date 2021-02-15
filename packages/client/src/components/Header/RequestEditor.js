import React from 'react';
import { Button } from 'reactstrap';

import { requestEditor } from '../../api';

const RequestEditor = () => {
  const handelClick = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      const res = await requestEditor(token);
      console.log(
        '🚀 ~ file: RequestEditor.js ~ line 13 ~ handelClick ~ res',
        res
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handelClick} color='success'>
      Request Editor
    </Button>
  );
};

export default RequestEditor;

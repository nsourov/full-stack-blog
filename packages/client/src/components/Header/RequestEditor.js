import React, { useState } from 'react';
import { Button } from 'reactstrap';

import { requestEditor } from '../../api';

const RequestEditor = () => {
  const [loading, setLoading] = useState(false);
  const handelClick = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwtToken');
      await requestEditor(token);
      setLoading(false);
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

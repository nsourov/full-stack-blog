import React, { useState } from 'react';
import { Row, Col, Table, Space, Tooltip, Button } from 'antd';
import { Main, TableWrapper, CardToolbox } from '../../../container/styled';

import { getUnPublishedComments } from '../../../api/api';

const Comments = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fatchComments = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('jwtToken');
        const res = await getUnPublishedComments(1, page, token);
        console.log('🚀 ~ file: index.js ~ line 17 ~ fatchComments ~ res', res)
      } catch (error) {
        console.log(error);
      }
    };
    fatchComments()
  }, [page]);
  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}></Col>
      </Row>
    </Main>
  );
};

export default Comments;

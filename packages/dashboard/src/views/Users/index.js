import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button } from 'antd';

import { Main } from '../../container/styled';
import { getUsers } from '../../api/api';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
];

const Users = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fatchUsers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('jwtToken');
        const { data } = await getUsers(page, token);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fatchUsers();
  }, [page]);

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}>
          <h2>Users</h2>
          <Table
            columns={columns}
            loading={loading}
            dataSource={data?.users}
            pagination={{
              current: page,
              total: data?.count,
              pageSize: 10,
            }}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </Main>
  );
};

export default Users;

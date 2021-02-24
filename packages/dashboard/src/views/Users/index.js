import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { Main } from '../../container/styled';
import { getUsers, deleteUser } from '../../api';

const Users = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = useState(null);

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
  
  const handelDelete = async (userId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deleteUser(userId, token);
      message.success('User deleted');
      await fatchUsers();
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fatchUsers();
  }, [page]);

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };
  
  
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
  {
    title: 'Action',
    dataIndex: '_id',
    align: 'right',
    render: (item, record) => {
      return (
          <Button onClick={() => handelDelete(item)} icon={<DeleteOutlined />} />
      );
    },
  },
];

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

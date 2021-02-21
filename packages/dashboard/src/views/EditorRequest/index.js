import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Table, Space } from 'antd';

import { Button } from '../../components/buttons/buttons';
import { Main } from '../../container/styled';
import {
  getEditorRequests,
  acceptEditorRequest,
  deleteEditorRequest,
} from '../../api/api';
import Heading from '../../components/heading/heading';
import { ProjectListTitle } from './style';

const EditorRequest = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  const fatchRequest = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwtToken');
      const { data } = await getEditorRequests(page, token);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fatchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handelAccept = async (userId) => {
    try {
      const body = {
        role: 'editor',
      };
      const token = localStorage.getItem('jwtToken');
      await acceptEditorRequest(userId, body, token);
      fatchRequest();
    } catch (error) {
      console.error(error);
    }
  };

  const handelDelete = async (userId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deleteEditorRequest(userId, token);
      fatchRequest();
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'user',
      render: (user) => (
        <ProjectListTitle>
          <Heading as='h4'>{user.name}</Heading>
        </ProjectListTitle>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'user',
      render: (user) => user?.email,
    },
    {
      title: 'Action',
      dataIndex: '_id',
      align: 'right',
      render: (item, record) => {
        return (
          <Space size={8}>
            <Button
              key={record.user._id}
              onClick={() => handelAccept(record.user._id)}
              type='primary'
            >
              Accept
            </Button>
            <Button onClick={() => handelDelete(item)} type='danger'>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}>
          <h2>Requests to Editor</h2>
          <Table
            columns={columns}
            pagination={{
              current: page,
              total: data?.count,
              pageSize: 5,
            }}
            loading={loading}
            dataSource={data?.requests}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </Main>
  );
};

export default EditorRequest;

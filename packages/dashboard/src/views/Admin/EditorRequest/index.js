import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Table, Space } from 'antd';

import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../../container/styled';
import {
  getEditorRequests,
  acceptEditorRequest,
  deleteEditorRequest,
} from '../../../api/api';
import Heading from '../../../components/heading/heading';
import { ProjectListTitle } from './style';

const EditorRequest = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  const handelAccept = async (userId) => {
    try {
      setLoadingAccept(true);
      const body = {
        role: 'editor',
      };
      const token = localStorage.getItem('jwtToken');
      await acceptEditorRequest(userId, body, token);
      // await deleteEditorRequest(userId, token);
      setLoadingAccept(false);
    } catch (error) {
      console.error(error);
      setLoadingAccept(false);
    }
  };

  const handelDelete = async (userId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deleteEditorRequest(userId, token);
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
              loading={loadingAccept}
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

  useEffect(() => {
    const fatchRequest = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('jwtToken');
        const { data } = await getEditorRequests(page, token);
        console.log(
          '🚀 ~ file: index.js ~ line 78 ~ fatchRequest ~ data',
          data
        );
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fatchRequest();
  }, [page]);

  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}>
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

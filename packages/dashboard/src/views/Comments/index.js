/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Row, Col, Table, Button } from 'antd';
import { useParams } from 'react-router-dom';

import { Main } from '../../container/styled';
import {
  getUnPublishedComments,
  publishedComment,
  deleteComment,
} from '../../api';

const Comments = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const { postId, slug } = useParams();

  const fetchComments = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwtToken');
      const { data } = await getUnPublishedComments(postId, page, token);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchComments();
  }, [page, postId]);

  const handelPublished = async (id, body) => {
    try {
      const data = {
        body: body.body,
        published: true,
      };
      const token = localStorage.getItem('jwtToken');
      await publishedComment(slug, id, data, token);
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deleteComment(slug, id, token);
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'user',
      render: (user) => user.name,
    },
    {
      title: 'Email',
      dataIndex: 'user',
      render: (user) => user.email,
    },
    {
      title: 'Comment',
      dataIndex: 'body',
      ellipsis: true,
    },
    {
      title: 'Action',
      dataInedex: '_id',
      align: 'center',
      render: (item) => {
        return (
          <>
            <Button
              onClick={() => handelPublished(item._id, item)}
              type='primary'
            >
              Publish
            </Button>{' '}
            <Button
              onClick={() => handleDeleteComment(item._id)}
              type='danger'
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  return (
    <Main>
      <Row gutter={25}>
        <Col xs={24}>
          <h2>Unpublished Comments</h2>
          <Table
            columns={columns}
            loading={loading}
            dataSource={data?.comments}
            pagination={{
              current: page,
              total: data?.count,
              pageSize: 5,
            }}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </Main>
  );
};

export default Comments;

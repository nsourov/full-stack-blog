/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Row, Col, Table, Space, Tooltip, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Main, TableWrapper, CardToolbox } from '../../../container/styled';
import { getUnPublishedComments, publishedComment } from '../../../api/api';

const Comments = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const { postId, slug } = useParams();
  console.log('🚀 ~ file: index.js ~ line 16 ~ Comments ~ slug', slug);

  const dispatch = useDispatch();
  const fatchComments = async () => {
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
    fatchComments();
  }, [page, postId]);

  const handelPublished = async (id, body) => {
    try {
      const data = {
        body: body.body,
        published: true,
      };
      const token = localStorage.getItem('jwtToken');
      await publishedComment(slug, id, data, token);
      fatchComments();
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
      align: 'right',
      render: (item) => {
        return (
          <Button
            onClick={() => handelPublished(item._id, item)}
            type='primary'
          >
            Publish
          </Button>
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

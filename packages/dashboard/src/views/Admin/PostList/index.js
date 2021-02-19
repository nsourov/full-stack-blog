import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Row, Col, Spin, Table, Tag } from 'antd';
import moment from 'moment';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { ProjectHeader, ProjectSorting, ProjectListTitle } from './style';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Main } from '../../../container/styled';
import { getPublishedPost, getUnpublishedPost } from '../../../api/api';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    width: '20%',
    render: (title, record) => (
      <ProjectListTitle>
        <Heading as='h4'>
          <Link to={`/admin/post/update/${record?.slug}`}>{title}</Link>
        </Heading>
      </ProjectListTitle>
    ),
  },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
    width: '20%',

    render: (createdAt) => moment(createdAt).format('MM-DD-YYYY hh:mm a'),
  },
  {
    title: 'Name',
    dataIndex: 'user',
    render: (user) => user?.name,
  },
  {
    title: 'Email',
    dataIndex: 'user',
    render: (user) => user?.email,
  },
  {
    title: 'Status',
    dataIndex: 'published',
    render: (published) => (
      <Tag color={published ? 'success' : 'processing'}>
        {published ? 'published' : ' unpublished'}
      </Tag>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'slug',
    render: (text, record) => (
      <Dropdown
        className='wide-dropdwon'
        content={
          <>
            <Link to={`/admin/post/update/${record?.slug}`}>Edit</Link>
            <Link to='#'>Delete</Link>
          </>
        }
      >
        <Link to='#'>
          <FeatherIcon icon='more-horizontal' size={18} />
        </Link>
      </Dropdown>
    ),
  },
];

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [postStatus, setPostStatus] = useState('published');
  const history = useHistory();

  const handleCreatePostRoute = () => {
    history.push('/admin/post/create');
  };

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  useEffect(() => {
    const fatchPost = async () => {
      try {
        setLoading(true);
        let posts;
        if (postStatus === 'published') {
          const { data } = await getPublishedPost(page);
          posts = data;
        }
        if (postStatus === 'unpublished') {
          const token = localStorage.getItem('jwtToken');
          const { data } = await getUnpublishedPost(page, token);
          posts = data;
        }
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fatchPost();
  }, [page, postStatus]);

  return (
    <>
      <ProjectHeader>
        <PageHeader
          ghost
          buttons={[
            <Button
              onClick={handleCreatePostRoute}
              key='1'
              type='primary'
              size='default'
            >
              <FeatherIcon icon='plus' size={16} /> Add New Post
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className='project-sort-bar'>
                <div className='project-sort-nav'>
                  <nav>
                    <ul>
                      <li
                        className={
                          postStatus === 'published' ? 'active' : 'deactivate'
                        }
                      >
                        <Link onClick={() => setPostStatus('published')} to='#'>
                          Published
                        </Link>
                      </li>
                      <li
                        className={
                          postStatus === 'unpublished' ? 'active' : 'deactivate'
                        }
                      >
                        <Link
                          onClick={() => setPostStatus('unpublished')}
                          to='#'
                        >
                          Unpublished
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </ProjectSorting>
            <Table
              columns={columns}
              pagination={{
                current: page,
                total: data?.count,
                pageSize: 5,
              }}
              loading={loading}
              dataSource={data?.posts}
              onChange={handleTableChange}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default PostList;
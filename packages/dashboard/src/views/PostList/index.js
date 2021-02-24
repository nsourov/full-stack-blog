import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Row, Col, Table, Tag, message } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { PageHeader } from '../../components/page-headers/page-headers';
import { ProjectHeader, ProjectSorting, ProjectListTitle } from './style';
import { Button } from '../../components/buttons/buttons';
import Heading from '../../components/heading/heading';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Main } from '../../container/styled';
import { getUnpublishedPost, deletePost } from '../../api';
import { fatchPublishedPost } from '../../state/ducks/publishedPost';

const PostList = () => {
  const { data: publishedPost, loading: publishedPostLoading } = useSelector(
    (state) => state.publishedPost
  );
  const { id, role } = useSelector((state) => state.user.data);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postStatus, setPostStatus] = useState('published');
  const history = useHistory();

  const dispatch = useDispatch();

  const handleCreatePostRoute = () => {
    history.push('/post/create');
  };

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
  };

  const fatchPost = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('jwtToken');
      const { data } = await getUnpublishedPost(page, token, role, id);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postStatus === 'published') {
      dispatch(fatchPublishedPost(page, role, id));
    }
    if (postStatus === 'unpublished') {
      fatchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, postStatus, dispatch]);

  useEffect(() => {
    setData(publishedPost);
  }, [publishedPost]);

  const handelDeletePost = async (slug) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deletePost(slug, token);
      message.success('Delete post successfully')
      if (postStatus === 'published') {
        dispatch(fatchPublishedPost(page, role, id));
      }
      if (postStatus === 'unpublished') {
        fatchPost();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: '20%',
      render: (title, record) => (
        <ProjectListTitle>
          <Heading as='h4'>
            <Link to={`/post/update/${record?.slug}`}>{title}</Link>
          </Heading>
        </ProjectListTitle>
      ),
    },
    {
      title: 'createdAt Date',
      dataIndex: 'createdAt',
      width: '20%',
      responsive: ['sm'],
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
      responsive: ['sm'],
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
      render: (slug, record) => (
        <Dropdown
          className='wide-dropdwon'
          content={
            <>
              <Link to={`/post/update/${slug}`}>Edit</Link>
              <Link onClick={() => handelDeletePost(slug)} to='#'>
                Delete
              </Link>
              {role === 'admin' && (
                <Link to={`/post/comments/${slug}/${record._id}`}>
                  Comments
                </Link>
              )}
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
                        <Link
                          onClick={() => {
                            setPage(1);
                            setPostStatus('published');
                          }}
                          to='#'
                        >
                          Published
                        </Link>
                      </li>
                      <li
                        className={
                          postStatus === 'unpublished' ? 'active' : 'deactivate'
                        }
                      >
                        <Link
                          onClick={() => {
                            setPage(1);
                            setPostStatus('unpublished');
                          }}
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
              loading={loading || publishedPostLoading}
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

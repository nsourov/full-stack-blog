import React, { useState, Suspense, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Row, Col, Spin, Table } from 'antd';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { ProjectHeader, ProjectSorting } from './style';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../../container/styled';
import { getPublishedPost } from '../../../api/api';



const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];


const PostList = ({ match }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [postStatus, setPostStatus] = useState('published');
  const history = useHistory();
  const [state, setState] = useState({
    notData: [],
    visible: false,
    categoryActive: 'all',
  });
  const { notData, visible } = state;

  const { path } = match;

  const handleCreatePostRoute = () => {
    history.push('/admin/post/create');
  };
  const handleSearch = (searchText) => {
    // const data = searchData.filter((item) =>
    //   item.title.toUpperCase().startsWith(searchText.toUpperCase())
    // );
    // setState({
    //   ...state,
    //   notData: data,
    // });
  };

  useEffect(() => {
    const fatchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getPublishedPost(page);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fatchPost();
  }, [page]);

  console.log('🚀 ~ file: index.js ~ line 46 ~ fatchPost ~ res', data);

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
            <div>
              {loading ? (
                <div className='spin'>
                  <Spin />
                </div>
              ) : (
                'data'
              )}
              {/* <Switch>
                <Suspense
                  fallback={
                    <div className='spin'>
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path} component={List} exact />
                  <List
                    isLoading={isLoading}
                    posts={posts}
                    pages={pages}
                    paginationChangeHandler={(e) => paginationChangeHandler(e)}
                    handleDelete={handleDelete}
                  />
                </Suspense>
              </Switch> */}
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default PostList;

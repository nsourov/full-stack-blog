import React, { lazy, useState, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { getPosts, deletePost } from '../../redux/postReducer/postReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const List = lazy(() => import('./overview/List'));

const Project = ({ match }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const { isLoading, posts, pages } = useSelector((state) => state.post);
  const { path } = match;

  const history = useHistory();
  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: 'all',
  });

  const [postStatus, setPostStatus] = useState('published');

  const { notData, visible } = state;
  const handleDelete = (slug) => {
    dispatch(deletePost(slug));
    dispatch(
      getPosts({
        postStatus,
      })
    );
  };
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) =>
      item.title.toUpperCase().startsWith(searchText.toUpperCase())
    );
    setState({
      ...state,
      notData: data,
    });
  };

  useEffect(() => {
    let data = {
      postStatus,
    };
    dispatch(getPosts(data));
  }, [dispatch, postStatus]);

  const paginationChangeHandler = (e) => {
    let data = {
      postStatus,
      page: e,
    };
    dispatch(getPosts(data));
  };

  const handleCreatePostRoute = () => {
    history.push('/admin/post/create');
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

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
                <div className='project-sort-search'>
                  <AutoComplete
                    onSearch={handleSearch}
                    dataSource={notData}
                    placeholder='Search post'
                    patterns
                  />
                </div>
              </div>
            </ProjectSorting>
            <div>
              <Switch>
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
              </Switch>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

Project.propTypes = {
  match: propTypes.object,
};

export default Project;

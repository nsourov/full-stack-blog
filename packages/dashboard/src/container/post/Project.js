import React, { lazy, useState, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select,Skeleton  } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import CreateProject from './overview/CreateProject';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import {
  filterProjectByStatus,
  sortingProjectByCategory,
} from '../../redux/project/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { getPosts } from '../../redux/postReducer/postReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const List = lazy(() => import('./overview/List'));

const Project = ({ match }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const {isLoading, posts, pages} = useSelector((state) => state.post);
  const { path } = match;

  const history = useHistory()
  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: 'all',
  });

  const [postStatus, setPostStatus] = useState('published');

  const { notData, visible } = state;
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) =>
      item.title.toUpperCase().startsWith(searchText.toUpperCase())
    );
    setState({
      ...state,
      notData: data,
    });
  };

  console.log(posts)


  useEffect(() => {
    let data = {
      postStatus
    }
    dispatch(getPosts(data))
  }, [dispatch, postStatus])
  const paginationChangeHandler = e => {
    let data = {
      postStatus,
      page:e
    }
    dispatch(getPosts(data))
  }
  const onSorting = (selectedItems) => {
    dispatch(sortingProjectByCategory(selectedItems));
  };

  const onChangeCategory = (value) => {
    setState({
      ...state,
      categoryActive: value,
    });
    dispatch(filterProjectByStatus(value));
  };

  const showModal = () => {
    // setState({
    //   ...state,
    //   visible: true,
    // });

    history.push("/admin/editor")
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  let numbers = Array.from(
    { length: pages },
    (_, i) => i + 1
  );
  console.log(numbers)
  return (
    <>
      <ProjectHeader>
        <PageHeader
          ghost
          // title="Projects"
          // subTitle={<>12 Running Projects</>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
              <FeatherIcon icon="plus" size={16} /> Create Post
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
                <div className="project-sort-nav">
                  <nav>
                    <ul>
                      <li
                        className={
                          postStatus === 'published'
                            ? 'active'
                            : 'deactivate'
                        }
                      >
                        <Link onClick={() => setPostStatus('published')} to="#">
                          Published
                        </Link>
                      </li>
                      <li
                        className={
                          postStatus === 'unpublished'
                            ? 'active'
                            : 'deactivate'
                        }
                      >
                        <Link
                          onClick={() => setPostStatus('unpublished')}
                          to="#"
                        >
                          Unpublished
                        </Link>
                      </li>
                      {/* <li
                        className={
                          state.categoryActive === 'complete'
                            ? 'active'
                            : 'deactivate'
                        }
                      >
                        <Link
                          onClick={() => onChangeCategory('complete')}
                          to="#"
                        >
                          Complete
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === 'late'
                            ? 'active'
                            : 'deactivate'
                        }
                      >
                        <Link onClick={() => onChangeCategory('late')} to="#">
                          Late
                        </Link>
                      </li>
                      <li
                        className={
                          state.categoryActive === 'early'
                            ? 'active'
                            : 'deactivate'
                        }
                      >
                        <Link onClick={() => onChangeCategory('early')} to="#">
                          Early
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
                <div className="project-sort-search">
                  <AutoComplete
                    onSearch={handleSearch}
                    dataSource={notData}
                    placeholder="Search post"
                    patterns
                  />
                </div>
                {/* <div className="project-sort-group">
                  <div className="sort-group">
                    <span>Sort By:</span>
                    <Select onChange={onSorting} defaultValue="category">
                      <Select.Option value="category">
                        Project Category
                      </Select.Option>
                      <Select.Option value="rate">Top Rated</Select.Option>
                      <Select.Option value="popular">Popular</Select.Option>
                      <Select.Option value="time">Newest</Select.Option>
                      <Select.Option value="price">Price</Select.Option>
                    </Select>
                    <div className="layout-style">
                      <NavLink to={`${path}/grid`}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={`${path}/list`}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </div> */}
              </div>
            </ProjectSorting>
            <div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path} component={List} exact />
                  {/* <Route path={`${path}/list`} component={List} /> */}
                  {/* {!isLoading && (
                    <Skeleton active />
                  )} */}
                 
                    <List isLoading={isLoading} posts={posts} pages={pages} paginationChangeHandler={(e) => paginationChangeHandler(e)} />
                  
                  
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Row>
        <CreateProject onCancel={onCancel} visible={visible} />
      </Main>
    </>
  );
};

Project.propTypes = {
  match: propTypes.object,
};

export default Project;

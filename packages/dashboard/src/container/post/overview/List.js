import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Pagination, Tag, Skeleton } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';

const ProjectLists = ({ isLoading, posts, pages, paginationChangeHandler, handleDelete }) => {
  const project = useSelector((state) => state.projects.data);
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  if (projects.length)
    posts.map((value) => {
      const { title, category, published, slug, createdAt } = value;
      return dataSource.push({
        key: slug,
        title: (
          <ProjectListTitle>
            <Heading as='h4'>
              <Link to={`/admin/post/${slug}`}>{title}</Link>
            </Heading>

            <p>{category}</p>
          </ProjectListTitle>
        ),
        createdAt: <span className='date-started'>{moment(createdAt).format('MM-DD-YYYY hh:mm a')}</span>,
        status: (
          <Tag color={published ? 'success' : 'processing'}>
            {published ? 'published' : ' unpublished'}
          </Tag>
        ),
        action: (
          <Dropdown
            className='wide-dropdwon'
            content={
              <>
                <Link to={`/admin/post/${slug}`}>Edit</Link>
                <Link to='#' onClick={() => handleDelete(slug)}>Delete</Link>
              </>
            }
          >
            <Link to='#'>
              <FeatherIcon icon='more-horizontal' size={18} />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          {isLoading && (
            <>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </>
          )}

          {!isLoading && (
            <ProjectList>
              <div className='table-responsive'>
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                />
              </div>
            </ProjectList>
          )}
        </Cards>
      </Col>
      <Col xs={24} className='pb-30'>
        <ProjectPagination>
          {projects.length ? (
            <Pagination
              onChange={paginationChangeHandler}
              // showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={10 * pages}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default ProjectLists;

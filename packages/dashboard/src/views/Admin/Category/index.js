import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Form, Input, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { fatchCategories } from '../../../state/ducks/category';
import { Button } from '../../../components/buttons/buttons';
import { Main, TableWrapper, CardToolbox } from '../../../container/styled';
import { ContactPageheaderStyle } from './style';
import Create from './Create';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement='topLeft' title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Post',
    dataIndex: 'postCount',
  },
];

const Category = () => {
  const { data, loading } = useSelector((state) => state.categories);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  console.log('🚀 ~ file: index.js ~ line 30 ~ Category ~ data', data);
  useEffect(() => {
    dispatch(fatchCategories());
  }, [dispatch]);
  return (
    <>
      <CardToolbox>
        <ContactPageheaderStyle>
          <PageHeader
            ghost
            title='Categories'
            buttons={[
              <Button
                onClick={() => setShowModal(true)}
                className='btn-add_new'
                size='default'
                type='primary'
                key='1'
              >
                <Link to='#'>+ Add New</Link>
              </Button>,
            ]}
          />
        </ContactPageheaderStyle>
      </CardToolbox>
      <Table dataSource={data?.categories} columns={columns} />
      <Create visible={showModal} onCancel={setShowModal} />
    </>
  );
};

export default Category;

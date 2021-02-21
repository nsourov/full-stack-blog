import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Space, Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { PageHeader } from '../../components/page-headers/page-headers';
import { fatchCategories } from '../../state/ducks/category';
// import { Button } from '../../components/buttons/buttons';
import { Main, TableWrapper, CardToolbox } from '../../container/styled';
import { ContactPageheaderStyle } from './style';
import Create from './Create';
import Update from './Update';

const { Column } = Table;
const Category = () => {
  const { data, loading } = useSelector((state) => state.categories);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const dispatch = useDispatch();

  const handelUpdateModal = (value) => {
    setUpdateData(value.slug);
    setShowUpdateModal(true);
  };

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
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Table dataSource={data?.categories} loading={loading}>
              <Column title='Name' dataIndex='name' />
              <Column
                title='Description'
                dataIndex='description'
                key='description'
                ellipsis={{
                  showTitle: false,
                }}
                render={(address) => (
                  <Tooltip placement='topLeft' title={address}>
                    {address}
                  </Tooltip>
                )}
              />
              <Column title='Post' dataIndex='postCount' />
              <Column
                title='Action'
                key='action'
                align='center'
                render={(text, record) => (
                  <Space size='middle'>
                    <Button
                      type='text'
                      onClick={() => handelUpdateModal(record)}
                      icon={<FeatherIcon icon='edit' size={18} />}
                    />
                    <Button
                      type='text'
                      danger
                      icon={<FeatherIcon icon='trash' size={18} />}
                    />
                  </Space>
                )}
              />
            </Table>
          </Col>
        </Row>
      </Main>
      <Create visible={showModal} onCancel={setShowModal} />
      <Update
        visible={showUpdateModal}
        onCancel={setShowUpdateModal}
        slug={updateData}
        setUpdateData={setUpdateData}
      />
    </>
  );
};

export default Category;

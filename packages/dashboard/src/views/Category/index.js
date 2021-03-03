import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Space, Tooltip, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { PageHeader } from '../../components/page-headers/page-headers';
import { fetchCategories } from '../../state/ducks/category';
import { Main, CardToolbox } from '../../container/styled';
import { deleteCategory } from '../../api';
import { ContactPageheaderStyle } from './style';
import Create from './Create';
import Update from './Update';

const { Column } = Table;
const Category = () => {
  const { data, loading } = useSelector((state) => state.categories);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [defaultValue, setDefaultValue] = useState({});

  const dispatch = useDispatch();

  const handelUpdateModal = async (slug) => {
    setDefaultValue(slug);
    setShowUpdateModal(true);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handelDelete = async (slug) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await deleteCategory(slug, token);
      message.success('Delete category successfully');
      dispatch(fetchCategories());
    } catch (error) {
      console.log(error);
    }
  };

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
                key='slug'
                align='center'
                render={(item, record) => {
                  return (
                    <Space size='middle'>
                      <Button
                        type='text'
                        onClick={() => handelUpdateModal(item)}
                        icon={<FeatherIcon icon='edit' size={18} />}
                      />
                      <Button
                        type='text'
                        danger
                        onClick={() => handelDelete(item?.slug)}
                        icon={<FeatherIcon icon='trash' size={18} />}
                      />
                    </Space>
                  );
                }}
              />
            </Table>
          </Col>
        </Row>
      </Main>
      <Create visible={showModal} onCancel={setShowModal} />
      <Update
        visible={showUpdateModal}
        defaultValue={defaultValue}
        onCancel={setShowUpdateModal}
      />
    </>
  );
};

export default Category;

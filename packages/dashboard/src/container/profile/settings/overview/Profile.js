import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper, TagInput } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { Tag } from '../../../../components/tags/tags';

const { Option } = Select;
const Profile = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    setState({ ...state, values: { ...values, tags: state.tags } });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  const checked = (checke) => {
    setState({ tags: checke });
  };

  const user = useSelector((store) => store.auth.user);
  console.log('🚀 ~ file: Profile.js ~ line 34 ~ Profile ~ user', user);

  return (
    <Cards
      title={
        <div className='setting-card-title'>
          <Heading as='h4'>Profile</Heading>
          {/* <span>Set Up Your Personal Information</span> */}
        </div>
      }
    >
      <Row justify='center'>
        <Col xl={12} lg={16} xs={24}>
          <BasicFormWrapper>
            <Form name='editProfile' onFinish={handleSubmit}>
              <Form.Item name='name' initialValue={user?.name} label='Name'>
                <Input />
              </Form.Item>

              <Form.Item name='email' initialValue={user?.email} label='Email'>
                <Input type='email' />
              </Form.Item>
              <Form.Item
                name='password'
                initialValue={user?.password}
                label='Password'
              >
                <Input type='password' />
              </Form.Item>

              {/* <div className='setting-form-actions'>
                <Button size='default' htmlType='submit' type='primary'>
                  Update Profile
                </Button>
                &nbsp; &nbsp;
                <Button size='default' onClick={handleCancel} type='light'>
                  Cancel
                </Button>
              </div> */}
            </Form>
          </BasicFormWrapper>
        </Col>
      </Row>
    </Cards>
  );
};

export default Profile;

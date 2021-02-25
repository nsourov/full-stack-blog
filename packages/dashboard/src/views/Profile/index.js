import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { useSelector } from 'react-redux';

import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { BasicFormWrapper } from '../../container/styled';
import { updateUser } from '../../api';

const Profile = () => {
  const [load, setLoad] = useState(false);

  const user = useSelector((store) => store.user.data);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return false;
    }

    setLoad(true);
    const token = localStorage.getItem('jwtToken');
    const res = await updateUser(user.id, form.getFieldsValue(), token);
    if (res.data.success) {
      message.success('Profile Updated!');
    } else {
      message.error('Failed to update profile');
    }
    setLoad(false);
  };

  return (
    <Cards
      title={
        <div className='setting-card-title'>
          <Heading as='h4'>Profile</Heading>
        </div>
      }
    >
      <Row justify='center'>
        <Col xl={12} lg={16} xs={24}>
          <BasicFormWrapper>
            <Form name='editProfile' form={form}>
              <Form.Item name='name' initialValue={user?.name} label='Name'>
                <Input placeholder='Your name' />
              </Form.Item>

              <Form.Item name='email' initialValue={user?.email} label='Email'>
                <Input type='email' placeholder='Your email' />
              </Form.Item>

              <Form.Item name='password' label='Password'>
                <Input.Password visibilityToggle placeholder='New password' />
              </Form.Item>

              <Form.Item
                name='bio'
                label='About'
                initialValue={user?.bio}
                rules={[
                  { max: 200, message: 'Bio cannot be more than 200 word' },
                ]}
                extra='Maximum 200 word'
              >
                <Input.TextArea placeholder='Write about yourself' />
              </Form.Item>

              <div className='setting-form-actions'>
                <Button
                  size='default'
                  htmlType='submit'
                  type='primary'
                  onClick={handleSubmit}
                  loading={load}
                >
                  Update Profile
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </Col>
      </Row>
    </Cards>
  );
};

export default Profile;

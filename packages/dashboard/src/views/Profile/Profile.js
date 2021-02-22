import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { useSelector } from 'react-redux';

import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { BasicFormWrapper } from '../../container/styled';
import UserAxios from '../../redux/Axios/UserAxios';

const Profile = () => {
  const [load, setLoad] = useState(false);

  const user = useSelector((store) => store.user.data);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    setLoad(true);
    const res = await UserAxios.put(
      `/users/profile/${user.id}`,
      form.getFieldsValue()
    );
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
                <Input />
              </Form.Item>

              <Form.Item name='email' initialValue={user?.email} label='Email'>
                <Input type='email' />
              </Form.Item>

              <Form.Item name='password' label='Password'>
                <Input.Password visibilityToggle />
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

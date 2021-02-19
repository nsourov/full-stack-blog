import React from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { BasicFormWrapper } from '../../../container/styled';

const Profile = () => {
  const user = useSelector((store) => store.user.data);
  const [form] = Form.useForm();

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
            <Form
              name='editProfile'
              // onFinish={handleSubmit}
            >
              <Form.Item name='name' initialValue={user?.name} label='Name'>
                <Input />
              </Form.Item>

              <Form.Item name='email' initialValue={user?.email} label='Email'>
                <Input type='email' />
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

import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import Heading from '../../components/heading/heading';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthWrapper } from './style';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('e',e)
    // let data = {
    //   email,
    //   password,
    // };
    // dispatch(login(history, data));
  };

  return (
    <AuthWrapper>
      <div className='auth-contents'>
        <Form
          name='login'
          form={form}
          onFinish={handleSubmit}
          layout='vertical'
        >
          <Heading as='h3'>
            Sign in to <span className='color-secondary'>Admin</span>
          </Heading>
          <Form.Item
            name='username'
            rules={[{ message: 'Please input your email!', required: true }]}
            label='Email Address'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            validateStatus={errors?.email ? 'error' : ''}
            help={errors?.email ? errors.email : ''}
          >
            <Input placeholder='Email Address' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[{ message: 'Please input your password!', required: true }]}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            validateStatus={errors?.password ? 'error' : ''}
            help={errors?.password ? errors.password : ''}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <div className='auth-form-action'>
            <NavLink className='forgot-pass-link' to='/forgotPassword'>
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button
              className='btn-signin'
              htmlType='submit'
              type='primary'
              size='large'
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default Signin;

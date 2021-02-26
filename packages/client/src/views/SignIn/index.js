import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../api';
import { setCurrentUser } from '../../state/ducks/authentication';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState({});
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onsubmit = async (e) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await login(e);
      dispatch(setCurrentUser({ token }));
      history.push('/');
      setLoading(false);
    } catch (error) {
      setApiError(error.response?.data.errors);
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Col
      lg={{ size: 4, offset: 4 }}
      md={{ size: 6, offset: 3 }}
      sm={12}
      xs={12}
      style={{ padding: '50px 20px' }}
      className='text-center'
    >
      <form onSubmit={handleSubmit(onsubmit)} className='text-left mb-5'>
        <div className='mb-3'>
          <label htmlFor='signInEmail' className='form-label'>
            Email
          </label>
          <input
            name='email'
            ref={register({
              required: true,
            })}
            type='email'
            className='form-control'
            id='signInEmail'
            placeholder='Enter Your Email'
          />
          {errors.email && errors.email.type === 'required' && (
            <span className='text-danger'>Please enter your email</span>
          )}
          {apiError?.email && (
            <span className='text-danger'>{apiError?.email}</span>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='signInPassword' className='form-label'>
            Password
          </label>
          <input
            name='password'
            ref={register({
              required: true,
            })}
            type='password'
            className='form-control'
            id='signInPassword'
            placeholder='Enter Your Password'
          />
          {errors.password && errors.password.type === 'required' && (
            <span className='text-danger'>Please enter your password</span>
          )}
          {apiError?.password && (
            <span className='text-danger'>{apiError?.password}</span>
          )}
        </div>
        <button
          type='submit'
          disabled={loading}
          className='text-capitalize btn btn-primary active btn-block mt-4'
        >
          {loading && <i className='fa fa-spinner fa-pulse fa-fw'></i>}
          sign in
        </button>
      </form>
    </Col>
  );
};

export default SignIn;

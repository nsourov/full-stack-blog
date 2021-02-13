import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../api';
import { setCurrentUser } from '../../state/ducks/authentication';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
      history.push('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Col
      lg={{ size: 6, offset: 3 }}
      md={{ size: 8, offset: 2 }}
      sm={12}
      xs={12}
      style={{ padding: '50px 20px' }}
    >
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className='mb-3'>
          <label htmlFor='signInEmail' className='form-label'>
            Email address
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
        </div>
        <div className='mb-3'>
          <label htmlFor='signInPassword' className='form-label'>
            Password
          </label>
          <input
            name='password'
            ref={register({
              required: true,
              min: 4,
              maxLength: 12,
            })}
            type='password'
            className='form-control'
            id='signInPassword'
            placeholder='Enter Your Password'
          />
          {errors.password && errors.password.type === 'required' && (
            <span className='text-danger'>Please enter your password</span>
          )}
        </div>
        <button
          type='submit'
          disabled={loading}
          className='text-capitalize btn btn-outline-primary'
        >
          {loading && <i className='fa fa-spinner fa-pulse fa-fw'></i>}
          sign in
        </button>
      </form>
    </Col>
  );
};

export default SignIn;

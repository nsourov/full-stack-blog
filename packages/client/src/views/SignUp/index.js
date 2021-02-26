import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerVisitor } from '../../api';
import { setCurrentUser } from '../../state/ducks/authentication';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState({});
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

  const dispath = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();

  const onsubmit = async (e) => {
    try {
      if (e.password !== e.confirmPassword) {
        setApiError({ confirmPassword: 'Passwords must match' });
        return;
      }

      setLoading(true);
      const createVisitor = {
        name: e.fullname,
        email: e.email,
        password: e.password,
        confirmPassword: e.confirmPassword,
      };

      let {
        data: { token },
      } = await registerVisitor(createVisitor);

      dispath(setCurrentUser({ token }));
      reset();
      setLoading(false);
    } catch (error) {
      setApiError(error.response?.data.errors);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [history, isAuthenticated]);

  return (
    <Col
      lg={{ size: 4, offset: 4 }}
      md={{ size: 6, offset: 3 }}
      sm={12}
      xs={12}
      style={{ padding: '50px 20px' }}
      className='text-center'
    >
      <div className='form-title mb-5'>
        <h1>Sign In </h1>
      </div>
      <form onSubmit={handleSubmit(onsubmit)} className='text-left mb-5'>
        <div className='mb-3'>
          <label htmlFor='signUpName' className='form-label'>
            Full Name
          </label>
          <input
            name='fullname'
            ref={register({
              required: true,
            })}
            type='text'
            className='form-control'
            id='signUpName'
            placeholder='Enter Your Full Name'
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <span className='text-danger'>Please enter your full name</span>
          )}
          {apiError?.name && (
            <span className='text-danger'>{apiError.name}</span>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='signUpEmail' className='form-label'>
            Email
          </label>
          <input
            name='email'
            ref={register({
              required: true,
            })}
            type='email'
            className='form-control'
            id='signUpEmail'
            placeholder='Enter Your Email'
          />
          {errors.email && errors.email.type === 'required' && (
            <span className='text-danger'>Please enter your email</span>
          )}
          {apiError?.email && (
            <span className='text-danger'>{apiError.email}</span>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='signUpPassword' className='form-label'>
            Password
          </label>
          <input
            name='password'
            ref={register({
              required: true,
            })}
            type='password'
            className='form-control'
            id='signUpPassword'
            placeholder='Enter Your Password'
          />
          {errors.password && errors.password.type === 'required' && (
            <span className='text-danger'>Please enter your password</span>
          )}
          {apiError?.password && (
            <span className='text-danger'>{apiError.password}</span>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='signUpPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            name='confirmPassword'
            ref={register({
              required: true,
            })}
            type='password'
            className='form-control'
            id='signUpPassword'
            placeholder='Enter Your Password'
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'required' && (
              <span className='text-danger'>Passwords must match</span>
            )}
          {apiError?.confirmPassword && (
            <span className='text-danger'>{apiError.confirmPassword}</span>
          )}
        </div>
        <button
          type='submit'
          disabled={loading}
          className='text-capitalize btn btn-primary active btn-block mt-4'
        >
          {loading && <i className='fa fa-spinner fa-pulse fa-fw'></i>}
          sign up
        </button>
      </form>
    </Col>
  );
};

export default SignUp;

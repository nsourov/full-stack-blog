import React from 'react';
import { useForm } from 'react-hook-form';
import { Col } from 'reactstrap';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const onsubmit = (e) => {
    console.log(e);
  };

  return (
    <Col
      lg={{ size: 6, offset: 3 }}
      md={{ size: 8, offset: 2 }}
      sm={12}
      xs={12}
      style={{ padding: '50px 20px' }}
    >
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-3">
          <label htmlFor="signUpName" className="form-label">
            Full Name
          </label>
          <input
            name="fullname"
            ref={register({
              required: true,
            })}
            type="text"
            className="form-control"
            id="signUpName"
            placeholder="Enter Your Full Name"
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <span className="text-danger">Please enter your full name</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">
            Email address
          </label>
          <input
            name="email"
            ref={register({
              required: true,
            })}
            type="email"
            className="form-control"
            id="signUpEmail"
            placeholder="Enter Your Email"
          />
          {errors.email && errors.email.type === 'required' && (
            <span className="text-danger">Please enter your email</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="signUpPassword" className="form-label">
            Password
          </label>
          <input
            name="password"
            ref={register({
              required: true,
              min: 4,
              maxLength: 12,
            })}
            type="password"
            className="form-control"
            id="signUpPassword"
            placeholder="Enter Your Password"
          />
          {errors.password && errors.password.type === 'required' && (
            <span className="text-danger">Please enter your password</span>
          )}
        </div>
        <button
          type="submit"
          className="text-capitalize btn btn-outline-primary"
        >
          sign up
        </button>
      </form>
    </Col>
  );
};

export default SignUp;

import React from 'react';
import { useSelector } from 'react-redux';

const AddComment = () => {
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  return (
    isAuthenticated && (
      <div className='add-comment'>
        <header>
          <h3 className='h6'>Leave a reply</h3>
        </header>
        <form action='#' className='commenting-form'>
          <div className='row'>
            <div className='form-group col-md-12'>
              <textarea
                name='usercomment'
                id='usercomment'
                placeholder='Type your comment'
                className='form-control'
              ></textarea>
            </div>
            <div className='form-group col-md-12'>
              <button type='submit' className='btn btn-secondary'>
                Submit Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default AddComment;

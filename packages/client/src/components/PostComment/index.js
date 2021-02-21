import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { updateComment, deleteComment } from '../../api';
import dateFormat from '../../utils/dateFormat';

const PostComment = (props) => {
  const { name, date, description, userId, slug, commentId, reFatch } = props;
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(description);
  const [loading, setLoading] = useState(false);

  const {
    isAuthenticated,
    data: { id },
  } = useSelector((store) => store.user);

  const { register, handleSubmit, errors, reset } = useForm();

  const isUser = id === userId;

  const onsubmit = async (e) => {
    try {
      if (edit && e.body !== comment) {
        setLoading(true);
        await updateComment(slug, commentId, e, localStorage.jwtToken);
        setComment(e?.body);
        reset();
        setEdit(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onDelete = async (e) => {
    try {
      await deleteComment(slug, commentId, localStorage.jwtToken);
      reFatch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className='comment'>
      <div className='comment-header d-flex justify-content-between'>
        <div className='user d-flex align-items-center'>
          <div className='image'>
            <i className='fa fa-user-circle-o fa-2x' aria-hidden='true'></i>
          </div>
          <div className='title'>
            <strong>{name}</strong>
            <span className='date'>{dateFormat(date)}</span>
          </div>
        </div>
      </div>
      <div className='comment-body'>
        {!edit && <p>{comment}</p>}
        {isAuthenticated && isUser && !edit && (
          <>
            <Button color='link' onClick={() => setEdit(true)}>
              <i className='fa fa-edit'></i>
            </Button>

            <Button onClick={onDelete} color='link' className='text-danger'>
              <i className='fa fa-trash'></i>
            </Button>
          </>
        )}
        {isAuthenticated && isUser && edit && (
          <form onSubmit={handleSubmit(onsubmit)} className='commenting-form'>
            <textarea
              defaultValue={comment}
              type='text'
              name='body'
              ref={register({
                required: true,
              })}
              className='form-control w-50'
            />
            <Button
              disabled={loading}
              className='m-1'
              color='success'
              size='sm'
            >
              {loading && <i className='fa fa-spinner fa-pulse fa-fw'></i>}
              Save
            </Button>
            <Button
              onClick={() => setEdit(false)}
              className='m-1'
              color='danger'
              size='sm'
              disabled={loading}
            >
              Cancel
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

PostComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default PostComment;

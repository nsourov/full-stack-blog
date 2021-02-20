import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { updateComment, deleteComment } from '../../api';
import dateFormat from '../../utils/dateFormat';
import dummiAvatar from '../../assets/img/avatar-1.jpg';

const PostComment = (props) => {
  const [edit, setEdit] = useState(false);
  const { avatar, name, date, description, userId, slug, commentId } = props;

  const {
    isAuthenticated,
    data: { id },
  } = useSelector((store) => store.user);

  const { register, handleSubmit, errors, reset } = useForm();

  const isUser = id === userId;

  const onsubmit = async (e) => {
    try {
      await updateComment(slug, commentId, e, localStorage.jwtToken);
      reset();
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (e) => {
    try {
      await deleteComment(slug, commentId, localStorage.jwtToken);
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
        {!edit && <p>{description}</p>}
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
              defaultValue={description}
              type='text'
              name='body'
              ref={register({
                required: true,
              })}
              className='form-control w-50'
            />
            <Button className='mt-1' color='success'>
              Save
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

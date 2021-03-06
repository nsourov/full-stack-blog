import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { store } from 'react-notifications-component';
import ImageUploader from 'react-images-upload';
import { useDispatch } from 'react-redux';

import { createGuestPost } from '../../api';
import { toggleGuestPostModal } from '../../state/ducks/blogs';

const style = {
  insert: 'top',
  container: 'top-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 2000,
    onScreen: true,
  },
};

const PostForm = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [agree, setAgree] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      let formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append('primaryPhoto', image);

      const token = localStorage.getItem('jwtToken');

      await createGuestPost(formData, token).catch(e => console.log(e));
      dispatch(toggleGuestPostModal())
      await store.addNotification({
        message: 'Your post is submitted successfully',
        type: 'info',
        ...style,
      });
    } catch {
      store.addNotification({
        message: 'something went wrong',
        type: 'danger',
        ...style,
      });
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='title'>Title</Label>
        <Input
          type='text'
          name='title'
          id='title'
          placeholder='Post title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for='body'>Description</Label>
        <Input
          type='textarea'
          name='body'
          id='body'
          placeholder='Type description here'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </FormGroup>
      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={(e) => setImage(e[0])}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={20000000}
        fileSizeError='Image size is too big'
        label='Max file size: 20mb, accepted: jpg, jpeg, gif, png'
        imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
        buttonText='Choose image'
        name='image'
        withPreview
        singleImage
      />
      <FormGroup check>
        <Label check>
          <Input
            type='checkbox'
            onChange={(e) => setAgree(e.target.value)}
            name='agree'
            required
          />{' '}
          I agree to the{' '}
          <a href='#' className='text-blue'>
            Privacy
          </a>{' '}
          and{' '}
          <a href='#' className='text-blue'>
            Terms of Use
          </a>
        </Label>
      </FormGroup>
      <br />
      <button
        className='btn btn-primary text-light bg-dark'
        type='submit'
        disabled={loading}
      >
        {loading && <Spinner size='sm' color='primary' />} Submit Post
      </button>
    </Form>
  );
};

export default PostForm;

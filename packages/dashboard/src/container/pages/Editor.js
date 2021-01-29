import React, { useState } from 'react';
import { Main } from '../styled';
import { Form, Input, Button, Upload, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserAxios from '../../redux/Axios/UserAxios';
import Editor from '../../components/editor/Editor';
const Editors = () => {
  const [form] = Form.useForm();
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const clearSuccess = () => {
    setSuccess(false);
  };
  const handlePublished = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', description);
    if (photo) {
      formData.append('photo', photo.originFileObj);
    }

    try {
      setLoad(true);
      await UserAxios.post('/posts/create-publish', formData);
      setErrors({});
      setSuccess(true);
      setLoad(false);
      setTimeout(clearSuccess, 3000);
    } catch (err) {
      console.log(err.response.data);
      setSuccess(false);
      setErrors(err.response.data.errors);
      setLoad(false);
    }
  };

  const handleSubmit = async () => {
    console.log(photo);
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', description);
    if (photo) {
      formData.append('photo', photo.originFileObj);
    }

    try {
      setLoad(true);
      await UserAxios.post('/posts', formData);
      setErrors({});
      setSuccess(true);
      setLoad(false);
      setTimeout(clearSuccess, 3000);
    } catch (err) {
      console.log(err.response.data);
      setSuccess(false);
      setErrors(err.response.data.errors);
      setLoad(false);
    }
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    setPhoto(e.file);
  };

  return (
    <>
      <Main style={{ marginTop: '25px' }}>
        <h2 className='mt4'>New Post </h2>
        {success && <Alert message='Post add successfully' type='success' />}
        <Form
          name='login'
          form={form}
          onFinish={handleSubmit}
          layout='vertical'
        >
          <Form.Item
            name='Title'
            rules={[{ message: 'Please input your title!', required: true }]}
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
            validateStatus={errors.title ? 'error' : ''}
            help={errors.title ? errors.title : ''}
          >
            <Input placeholder='Title' />
          </Form.Item>

          <Editor
            onChange={(e) => {
              setDescription(e);
            }}
            value={description}
          />

          <br />
          <Form.Item
            name='Image'
            valuePropName='fileList'
            getValueFromEvent={normFile}
          >
            <Upload.Dragger name='logo' listType='picture'>
              <p className='ant-upload-drag-icon'>
                <UploadOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
              <p className='ant-upload-hint'>
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item style={{ marginTop: '25px' }}>
            <Button
              className='btn-signin'
              htmlType='button'
              onClick={handleSubmit}
              type='primary'
              size='large'
              disabled={load}
            >
              {load ? 'Loading...' : 'Create'}
            </Button>

            <Button
              className='btn-signin'
              htmlType='button'
              onClick={handlePublished}
              type='primary'
              size='large'
              style={{ marginLeft: '25px' }}
              disabled={load}
            >
              {load ? 'Loading...' : 'Published'}
            </Button>
          </Form.Item>
        </Form>
      </Main>
    </>
  );
};

export default Editors;

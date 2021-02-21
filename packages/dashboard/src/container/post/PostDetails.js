import React, { useEffect, useState } from 'react';
import { Main } from '../styled';
import { Form, Input, Button, Upload, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserAxios from '../../redux/Axios/UserAxios';
import Editor from '../../components/editor/Editor';
import { useParams } from 'react-router-dom';

const Editors = () => {
  const [form] = Form.useForm();
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [successPublished, setSuccessPublished] = useState(false);
  const [fetchLoad, setFetchLoad] = useState(false);
  const [image, setImage] = useState(false);
  const [post, setPost] = useState(false);
  let params = useParams();
  const fetchData = async () => {
    let result = await UserAxios.get(`/posts/${params.slug}`);
    let { post } = result.data;
    setTitle(post.title);
    setBody(post.body);
    setImage(post.image);
    console.log(result);
    setPost(post);
    setFetchLoad(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const clearSuccess = () => {
    setSuccess(false);
    setSuccessPublished(false);
  };
  const handlePublished = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    if (photo) {
      formData.append('photo', photo.originFileObj);
    }

    let data = {
      title,
      body,
    };

    try {
      setLoad(true);
      await UserAxios.put(`/posts/${params.slug}/publish`, data);
      setErrors({});
      setSuccessPublished(true);
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
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    if (photo) {
      formData.append('photo', photo.originFileObj);
    }

    let data = {
      title,
      body,
    };
    try {
      setLoad(true);
      await UserAxios.put(`/posts/${params.slug}`, data);
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

  if (!fetchLoad) {
    return <h2>No post found!</h2>;
  }

  return (
    <>
      <Main style={{ marginTop: '25px' }}>
        <h2 className='mt4'>Update Post </h2>
        {success && (
          <Alert message='Post updated successfully' type='success' />
        )}
        {/* successPublished */}
        {successPublished && (
          <Alert message='Post published successfully' type='success' />
        )}
        <Form
          name='login'
          form={form}
          onFinish={handleSubmit}
          layout='vertical'
        >
          <Form.Item
            name='Title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            validateStatus={errors.title ? 'error' : ''}
            help={errors.title ? errors.title : ''}
          >
            <Input placeholder='Title' defaultValue={title} />
          </Form.Item>
          <Editor
            onChange={(e) => {
              setBody(e);
            }}
            value={body}
          />

          <br />
          <Form.Item
            name='Image'
            valuePropName='fileList'
            getValueFromEvent={normFile}
          >
            <Upload.Dragger
              name='logo'
              listType='picture-card'
              accept="image/png, image/jpeg"
              beforeUpload={() => false}             
            >
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

          {image && !photo && <img src={image} alt='cover' />}

          <Form.Item style={{ marginTop: '25px' }}>
            <Button
              className='btn-signin'
              htmlType='button'
              onClick={handleSubmit}
              type='primary'
              size='large'
              disabled={load}
            >
              {load ? 'Loading...' : 'Update'}
            </Button>
            {!post.published && (
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
            )}
          </Form.Item>
        </Form>
      </Main>
    </>
  );
};

export default Editors;

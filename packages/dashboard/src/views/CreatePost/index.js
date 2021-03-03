import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  Alert,
  Select,
  message,
  Row,
  Col,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import Editor from '../../components/editor/Editor';
import { Main } from '../../container/styled';
import { createPost, createPublishPost } from '../../api';
import { fetchCategories } from '../../state/ducks/category';

const { Option } = Select;

const CreatePost = () => {
  const {
    data: { categories },
    loading,
  } = useSelector((state) => state.categories);
  const { role } = useSelector((state) => state.user.data);

  const [form] = Form.useForm();
  const [primaryPhoto, setPrimaryPhoto] = useState(null);
  const [secondaryPhoto, setSecondaryPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const clearSuccess = () => {
    setSuccess(false);
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', description);
    if (category && category.length > 0) {
      formData.append('category', category);
    }
    if (primaryPhoto) {
      formData.append('primaryPhoto', primaryPhoto.originFileObj);
    }
    if (secondaryPhoto) {
      formData.append('secondaryPhoto', secondaryPhoto.originFileObj);
    }

    try {
      setLoad(true);
      const token = localStorage.getItem('jwtToken');
      await createPost(formData, token);
      message.success('Post create successfully');
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

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handlePublished = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', description);
    if (category && category.length > 0) {
      formData.append('category', category);
    }
    if (primaryPhoto) {
      formData.append('primaryPhoto', primaryPhoto.originFileObj);
    }
    if (secondaryPhoto) {
      formData.append('secondaryPhoto', secondaryPhoto.originFileObj);
    }

    try {
      setLoad(true);
      const token = localStorage.getItem('jwtToken');
      await createPublishPost(formData, token);
      message.success('Post create and published successfully');
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

  return (
    <Main>
      <h2 className='mt4'>New Post </h2>
      {success && <Alert message='Post add successfully' type='success' />}
      <br />
      <Form name='login' form={form} onFinish={handleSubmit} layout='vertical'>
        <Form.Item
          name='Title'
          rules={[{ message: 'Please input your title!', required: true }]}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          validateStatus={errors?.title ? 'error' : ''}
          help={errors?.title ? errors.title : ''}
        >
          <Input placeholder='Title' />
        </Form.Item>
        <Form.Item
          name='Category'
          help={errors?.category ? errors.category : ''}
          rules={[{ required: true }]}
        >
          <Select
            placeholder='Select a category'
            onChange={(e) => {
              setCategory(e);
            }}
            allowClear
          >
            {!loading
              ? categories.map((item) => (
                  <Option key={item._id} value={item._id}>
                    {item.name}
                  </Option>
                ))
              : 'Loading...'}
          </Select>
        </Form.Item>
        <Editor
          onChange={(e) => {
            setDescription(e);
          }}
          value={description}
        />

        <br />
        <Row gutter={6}>
          <Col sm={12}>
            <Form.Item
              name='Image1'
              valuePropName='fileList'
              getValueFromEvent={(e) => setPrimaryPhoto(e.fileList[0])}
              label='Primary image'
            >
              <Upload.Dragger
                name='logo'
                listType='picture-card'
                accept='image/png, image/jpeg'
                beforeUpload={() => false}
              >
                <p className='ant-upload-drag-icon'>
                  <UploadOutlined />
                </p>
                <p className='ant-upload-text'>
                  Click or drag file to this area to upload
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Col>
          {primaryPhoto && (
            <Col sm={12}>
              <Form.Item
                name='Image2'
                valuePropName='fileList'
                getValueFromEvent={(e) => setSecondaryPhoto(e.fileList[0])}
                label='Secondary image'
              >
                <Upload.Dragger
                  name='logo'
                  listType='picture-card'
                  accept='image/png, image/jpeg'
                  beforeUpload={() => false}
                >
                  <p className='ant-upload-drag-icon'>
                    <UploadOutlined />
                  </p>
                  <p className='ant-upload-text'>
                    Click or drag file to this area to upload
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Col>
          )}
        </Row>

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
          {role === 'admin' && (
            <Button
              className='btn-signin'
              htmlType='button'
              onClick={handlePublished}
              type='primary'
              size='large'
              style={{ marginLeft: '25px' }}
              disabled={load}
            >
              {load ? 'Loading...' : 'Publish'}
            </Button>
          )}
        </Form.Item>
      </Form>
    </Main>
  );
};

export default CreatePost;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  Image,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import Editor from '../../components/editor/Editor';
import { Main } from '../../container/styled';
import { getPost, updatePost, publishPost } from '../../api';
import { fetchCategories } from '../../state/ducks/category';

const { Option } = Select;

const UpdatePost = () => {
  const {
    data: { categories },
    loading,
  } = useSelector((state) => state.categories);
  const { role } = useSelector((state) => state.user.data);

  const [form] = Form.useForm();
  const [primaryPhoto, setPrimaryPhoto] = useState(null);
  const [secondaryPhoto, setSecondaryPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [successPublished, setSuccessPublished] = useState(false);
  const [fetchLoad, setFetchLoad] = useState(false);
  const [images, setImages] = useState(false);
  const [post, setPost] = useState(false);
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let result = await getPost(slug);
      let { post } = result.data;
      setTitle(post.title);
      setBody(post.body);
      setCategory(post?.category?._id);
      setImages(post.images);
      setPost(post);
      setFetchLoad(true);
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const clearSuccess = () => {
    setSuccess(false);
    setSuccessPublished(false);
  };
  const handlePublished = async () => {
    try {
      setLoad(true);
      const token = localStorage.getItem('jwtToken');
      await publishPost(slug, token);
      message.success('Post published successfully');
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
      await updatePost(slug, formData, token);
      message.success('Post update successfully');
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

  if (!fetchLoad || loading) {
    return <h2>No post found!</h2>;
  }

  return (
    <Main>
      <h2 className='mt4'>Update Post </h2>
      {success && <Alert message='Post updated successfully' type='success' />}
      {/* successPublished */}
      {successPublished && (
        <Alert message='Post published successfully' type='success' />
      )}
      <br />
      <Form name='login' form={form} onFinish={handleSubmit} layout='vertical'>
        <Form.Item
          name='Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          validateStatus={errors?.title ? 'error' : ''}
          help={errors?.title ? errors.title : ''}
        >
          <Input placeholder='Title' defaultValue={title} />
        </Form.Item>
        <Form.Item
          name='Category'
          help={errors?.category ? errors.category : ''}
          rules={[{ required: true }]}
        >
          <Select
            placeholder='Select a category'
            defaultValue={category}
            onChange={(e) => {
              setCategory(e);
            }}
          >
            {categories.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Editor
          onChange={(e) => {
            setBody(e);
          }}
          value={body}
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
        </Row>
        <Row gutter={10}>
          <Col sm={12}>
            {images && images.length && !primaryPhoto ? (
              <>
                {images[0] && (
                  <Image src={images[0]} alt='cover' width={300} height={300} />
                )}
              </>
            ) : (
              ''
            )}
          </Col>
          <Col sm={12}>
            {images && images.length && !secondaryPhoto ? (
              <>
                {images[1] && (
                  <Image src={images[1]} alt='cover' width={300} height={300} />
                )}
              </>
            ) : (
              ''
            )}
          </Col>
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
            {load ? 'Loading...' : 'Update'}
          </Button>
          {role === 'admin' && !post.published && (
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

export default UpdatePost;

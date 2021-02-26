import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message, Upload } from 'antd';
import { useSelector } from 'react-redux';
import {
  CameraFilled,
  LoadingOutlined,
  CameraOutlined,
} from '@ant-design/icons';

import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { BasicFormWrapper } from '../../container/styled';
import { updateUser } from '../../api';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const Profile = () => {
  const [load, setLoad] = useState(false);
  const [uploadLoading, setUploadLoad] = useState(false);
  const user = useSelector((store) => store.user.data);
  const [imageUrl, setImageUrl] = useState(user.image || '');
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return false;
    }

    setLoad(true);
    const token = localStorage.getItem('jwtToken');
    const res = await updateUser(user.id, form.getFieldsValue(), token);
    if (res.data.success) {
      message.success('Profile Updated!');
    } else {
      message.error('Failed to update profile');
    }
    setLoad(false);
  };

  const beforeUpload = (file) => {
    setUploadLoad(true);
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      setUploadLoad(false);
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must smaller than 5MB!');
      setUploadLoad(false);
    }
    return isJpgOrPng && isLt5M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
      });
      setUploadLoad(false);
    }
  };

  const profileForm = (
    <BasicFormWrapper>
      <Form name='editProfile' form={form}>
        <Form.Item name='name' initialValue={user?.name} label='Name'>
          <Input placeholder='Your name' />
        </Form.Item>

        <Form.Item name='email' initialValue={user?.email} label='Email'>
          <Input type='email' placeholder='Your email' />
        </Form.Item>

        <Form.Item name='password' label='Password'>
          <Input.Password visibilityToggle placeholder='New password' />
        </Form.Item>

        <Form.Item
          name='bio'
          label='About'
          initialValue={user?.bio}
          rules={[{ max: 200, message: 'Bio cannot be more than 200 word' }]}
          extra='Maximum 200 word'
        >
          <Input.TextArea placeholder='Write about yourself' rows={5} />
        </Form.Item>

        <div className='setting-form-actions'>
          <Button
            size='default'
            htmlType='submit'
            type='primary'
            onClick={handleSubmit}
            loading={load}
          >
            Update Profile
          </Button>
        </div>
      </Form>
    </BasicFormWrapper>
  );

  return (
    <Cards
      title={
        <div className='setting-card-title'>
          <Heading as='h4'>Profile</Heading>
        </div>
      }
    >
      <Row justify='center' gutter={24}>
        {user && user.role !== 'admin' ? (
          <Col xl={6} lg={12} xs={24}>
            {profileForm}
          </Col>
        ) : (
          <>
            <Col md={4}>
              <Upload
                name='image'
                listType='picture-card'
                className='avatar-uploader'
                showUploadList={false}
                action={`${process.env.REACT_APP_API_URL}/users/profile/${user.id}/upload-avatar`}
                headers={{ Authorization: localStorage.getItem('jwtToken') }}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt='avatar'
                      className='profile-image'
                    />
                    <p className='profile-image-uploader'>
                      {uploadLoading ? (
                        <LoadingOutlined style={{ fontSize: '2rem' }} />
                      ) : (
                        <>
                          <CameraOutlined style={{ fontSize: '1.5rem' }} />{' '}
                          Update Photo
                        </>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    {uploadLoading ? (
                      <LoadingOutlined style={{ fontSize: '2rem' }} />
                    ) : (
                      <CameraFilled style={{ fontSize: '3rem' }} />
                    )}
                  </>
                )}
              </Upload>
            </Col>
            <Col sm={8}>{profileForm}</Col>
          </>
        )}
      </Row>
    </Cards>
  );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import Editor from '../../components/editor/Editor';
import { Main } from '../../container/styled';
import { getTermsData, updateTermsData } from '../../api';

const UpdateTerms = () => {
  const [form] = Form.useForm();
  const [body, setBody] = useState('');
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let result = await getTermsData();
      let { body } = result.data;
      setBody(body);
    };
    fetchData();
  }, []);

  const clearSuccess = () => {
    setSuccess(false);
  };

  const handleSubmit = async () => {
    try {
      setLoad(true);
      const token = localStorage.getItem('jwtToken');
      await updateTermsData({ body }, token);
      setSuccess(true);
      setLoad(false);

      setTimeout(clearSuccess, 3000);
    } catch (err) {
      console.log(err.response.data);
      setSuccess(false);
      setLoad(false);
    }
  };

  return (
    <Main>
      <h2 className='mt4'>Terms of Use</h2>
      {success && <Alert message='Terms of Use updated' type='success' />}
      <br />
      <Form name='login' form={form} onFinish={handleSubmit} layout='vertical'>
        <Editor
          onChange={(e) => {
            setBody(e);
          }}
          value={body}
        />

        <br />
        <Form.Item style={{ marginTop: '25px' }}>
          <Button
            className='btn-signin'
            htmlType='button'
            onClick={handleSubmit}
            type='primary'
            size='large'
            disabled={load}
            icon={<EditOutlined />}
          >
            {load ? 'Loading...' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
    </Main>
  );
};

export default UpdateTerms;

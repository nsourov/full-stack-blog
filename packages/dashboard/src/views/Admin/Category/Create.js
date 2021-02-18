import React, { useState } from 'react';
import { Form, Input } from 'antd';

import { createCategory } from '../../../api/api';
import { BasicFormWrapper } from '../../../container/styled';
import { Modal } from '../../../components/modals/antd-modals';
import { Button } from '../../../components/buttons/buttons';
import { AddCategory } from './style';

const Create = ({ visible, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async (values) => {
    try {
      setLoading(true);
      const data = {
        name: values.name,
        description: values.description,
      };
      const token = localStorage.getItem('jwtToken');
      const res = await createCategory(data, token);
      console.log('🚀 ~ file: index.js ~ line 31 ~ handleOk ~ res', res);
      onCancel(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title='Create New Category'
      visible={visible}
      onCancel={() => onCancel(false)}
      footer={null}
    >
      <AddCategory>
        <BasicFormWrapper>
          <Form form={form} name='contact' onFinish={handleOk}>
            <Form.Item
              label='Category'
              name='name'
              rules={[
                {
                  message: 'Please input your category name!',
                  required: true,
                },
              ]}
            >
              <Input placeholder='Category Name' />
            </Form.Item>

            <Form.Item label='Description' name='description'>
              <Input.TextArea />
            </Form.Item>

            <Button
              htmlType='submit'
              size='default'
              type='primary'
              key='submit'
              loading={loading}
            >
              Add New Category
            </Button>
          </Form>
        </BasicFormWrapper>
      </AddCategory>
    </Modal>
  );
};

export default Create;

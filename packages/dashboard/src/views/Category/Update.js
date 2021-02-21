import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

import { fatchCategories } from '../../state/ducks/category';
import { updateCategory, getCategory } from '../../api/api';
import { BasicFormWrapper } from '../../container/styled';
import { Modal } from '../../components/modals/antd-modals';
import { Button } from '../../components/buttons/buttons';
import { AddCategory } from './style';

const Update = ({ visible, onCancel, slug }) => {
console.log('🚀 ~ file: Update.js ~ line 13 ~ Update ~ slug', slug)
  const [loading, setLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleOk = async (values) => {
    try {
      setLoading(true);
      const data = {
        name: values.name,
        description: values.description,
      };
      const token = localStorage.getItem('jwtToken');
      await updateCategory(slug, data, token);
      dispatch(fatchCategories());
      onCancel(false);
      setLoading(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fatchCategory = async () => {
      try {
        setLoading(true);
        const { data } = await getCategory(slug);
        console.log(
          '🚀 ~ file: Update.js ~ line 39 ~ fatchCategory ~ data',
          data
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        onCancel(false);
      }
    };
    fatchCategory();
  }, [onCancel, slug]);

  return (
    <Modal
      title='Update Category'
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
              initialValue={defaultValue?.name}
              rules={[
                {
                  message: 'Please input your category name!',
                  required: true,
                },
              ]}
            >
              <Input placeholder='Category Name' />
            </Form.Item>

            <Form.Item
              initialValue={defaultValue?.description}
              label='Description'
              name='description'
            >
              <Input.TextArea />
            </Form.Item>

            <Button
              htmlType='submit'
              size='default'
              type='primary'
              key='submit'
              loading={loading}
            >
              Update
            </Button>
          </Form>
        </BasicFormWrapper>
      </AddCategory>
    </Modal>
  );
};

export default Update;

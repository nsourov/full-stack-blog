import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';

import { fetchCategories } from '../../state/ducks/category';
import { updateCategory } from '../../api';
import { BasicFormWrapper } from '../../container/styled';
import { Modal } from '../../components/modals/antd-modals';
import { Button } from '../../components/buttons/buttons';
import { AddCategory } from './style';

const Update = ({ visible, onCancel, defaultValue }) => {
  const [loading, setLoading] = useState(false);
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
      await updateCategory(defaultValue?.slug, data, token);
      message.success('Category update successfully');
      dispatch(fetchCategories());
      onCancel(false);
      setLoading(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        name: defaultValue?.name,
        description: defaultValue?.description,
      });
    }
  }, [defaultValue.description, defaultValue.name, form, visible]);

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
              // initialValue={defaultValue.name}
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
              Update
            </Button>
          </Form>
        </BasicFormWrapper>
      </AddCategory>
    </Modal>
  );
};

export default Update;

import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import {usePersistFn} from 'ahooks'

const AntdForm = () => {
  const [form] = Form.useForm();
  const rules = {
    username: [{ required: true, message: '请输入用户名' }],
    password: [{ required: true, message: '请输入密码' }]
  }

  // 提交表单
  const submitForm = useCallback((data) => {
    console.log(data);
  }, [])
  // 重置表单
  const resetForm = useCallback(() => {
    form.resetFields();
  }, [form])
  /** 限制只能输入一位小数 */
  const limitDecimals = usePersistFn((value) => {
    const reg = /^(\-)*(\d+)\.(\d).*$/;
      if (typeof value === 'string') {
        return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : ''
      } else if (typeof value === 'number') {
        return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : ''
      } else {
        return ''
      }
  })

  return (
    <div>
      <h2>表单</h2>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{            // 初始化值
          username: '张三',
          remember: true
        }}
        onFinish={submitForm}>
        <Form.Item label="用户名" name="username" rules={rules.username}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={rules.password}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="密码" name="workNum" rules={rules.password}>
          <InputNumber min={0.5} step={0.5} formatter={limitDecimals}  />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 20 }}>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">提交</Button>
          <Button htmlType="button" onClick={resetForm}>重置</Button>
        </Form.Item>
      </Form>
      <hr />
    </div>
  );
};

export default AntdForm;
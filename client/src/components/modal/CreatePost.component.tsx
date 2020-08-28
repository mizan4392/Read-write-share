import React, { Component } from "react";
import { Modal, Input, Form, DatePicker } from "antd";
import SunEditor, { buttonList } from "suneditor-react";

import moment from "moment";
import ReactTagInput from "@pathofdev/react-tag-input";

export default function CreatePost() {
  const [form] = Form.useForm();

  function onFinish(value) {}
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  function onOk() {}
  function onCancel() {}

  return (
    <Modal
      // visible={createPostDia ? createPostDia : false}
      title="Create Post"
      width="60%"
      okText="Post"
      onOk={() => onOk()}
      onCancel={() => onCancel()}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Description:"
          name="des"
          rules={[
            { required: true, message: "Please write event description" },
          ]}
        >
          <SunEditor
            placeholder="Description:"
            setOptions={{ buttonList: buttonList.formatting }}
            setDefaultStyle="min-height:150px"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

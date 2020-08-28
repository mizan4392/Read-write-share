import React, { Component } from "react";
import { Modal, Input, Form, DatePicker } from "antd";
import SunEditor, { buttonList } from "suneditor-react";

import EventType from "../Selects/EventType.tsx";
import moment from "moment";
import ReactTagInput from "@pathofdev/react-tag-input";

export default function CreateEvent() {
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
      // visible={createEventDia ? createEventDia : false}
      title="Create Event"
      width="60%"
      okText="Create"
      onOk={() => onOk()}
      onCancel={() => onCancel()}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Title:"
          name="title"
          rules={[{ required: true, message: "Please a title" }]}
        >
          <Input placeholder="Title:" />
        </Form.Item>
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

        <Form.Item
          label="Event Type:"
          name="eventType"
          rules={[
            { required: true, message: "Please write event description" },
          ]}
          style={{ marginTop: "10px" }}
        >
          <EventType />
        </Form.Item>

        <Form.Item
          label="Event Expired Date:"
          name="expDate"
          rules={[
            { required: true, message: "Please write event description" },
          ]}
          style={{ marginTop: "10px" }}
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

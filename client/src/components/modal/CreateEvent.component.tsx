import React, { Component, useEffect } from "react";
import { Modal, Input, Form, DatePicker } from "antd";
import SunEditor, { buttonList } from "suneditor-react";

import moment from "moment";
import ReactTagInput from "@pathofdev/react-tag-input";
import EventType from "../Selects/EventType";
import { useStoreActions, useStoreState } from "../../hooks/easyPeasy";
import { openNotificationWithIcon } from "../../components/Notificarion.component";

export default function CreateEvent() {
  const [form] = Form.useForm();

  const { eventDia, postEvtLod, postEvtRes } = useStoreState(
    (state) => state.event
  );
  const user = useStoreState((state) => state.auth.user);
  const { setEventDia, postEvent, setEvtRes } = useStoreActions(
    (state) => state.event
  );

  useEffect(() => {
    if (postEvtRes) {
      openNotificationWithIcon("success", "Event created Successfully");
      setEvtRes(false);
      setEventDia();
      form.resetFields();
    }
  }, [postEvtRes]);

  function onFinish(value) {
    value.user = user?.id;
    postEvent(value);
  }
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  function onCancel() {
    setEventDia();
    form.resetFields();
  }

  return (
    <Modal
      visible={eventDia}
      title="Create Event"
      width="60%"
      okText="Create"
      onCancel={() => onCancel()}
      okButtonProps={{ form: "create-event", htmlType: "submit" }}
      confirmLoading={postEvtLod}
    >
      <Form layout="vertical" form={form} onFinish={onFinish} id="create-event">
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
          rules={[{ required: true, message: "Please select event Type" }]}
          style={{ marginTop: "10px" }}
        >
          <EventType onChange={() => {}} />
        </Form.Item>

        <Form.Item
          label="Event Expired Date:"
          name="endDate"
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

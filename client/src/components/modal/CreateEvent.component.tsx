import React, { Component, useEffect } from "react";
import { Modal, Input, Form, DatePicker, Upload, Button } from "antd";
import SunEditor, { buttonList } from "suneditor-react";

import moment from "moment";
import ReactTagInput from "@pathofdev/react-tag-input";
import EventType from "../Selects/EventType";
import { useStoreActions, useStoreState } from "../../hooks/easyPeasy";
import { openNotificationWithIcon } from "../../components/Notificarion.component";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
};

export default function CreateEvent() {
  const [form] = Form.useForm();

  const { eventDia, postEvtLod, postEvtRes } = useStoreState(
    (state) => state.event
  );
  const user = useStoreState((state) => state.auth.user);
  const { setEventDia, postEvent, setEvtRes, fetchGlobalEvt } = useStoreActions(
    (state) => state.event
  );

  useEffect(() => {
    if (postEvtRes) {
      openNotificationWithIcon("success", "Event created Successfully");
      setEvtRes(false);
      setEventDia();
      fetchGlobalEvt();
      form.resetFields();
    }
  }, [postEvtRes]);

  function onFinish(value) {
    value.user = user?.id;
    value.coverUrl =
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&w=1000&q=80";
    value.profileUrl =
      "https://images.unsplash.com/photo-1575709527142-a93ed587bb83?ixlib=rb-1.2.1&w=1000&q=80";
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

        <Form.Item
          label="Event Cover Picture:"
          name="aa"
          style={{ marginTop: "10px" }}
        >
          <Upload key="1" {...props}>
            <Button>Click to Profile</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Event Profile Picture:"
          name="endvvDate"
          style={{ marginTop: "10px" }}
        >
          <Upload key="2" {...props}>
            <Button>Click to Cover</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

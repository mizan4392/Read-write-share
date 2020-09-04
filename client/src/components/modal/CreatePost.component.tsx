import React, { Component, useState, useEffect } from "react";
import { Modal, Input, Form, DatePicker } from "antd";
import SunEditor, { buttonList } from "suneditor-react";

import moment from "moment";
import ReactTagInput from "@pathofdev/react-tag-input";
import { useStoreActions, useStoreState } from "../../hooks/easyPeasy";
import { openNotificationWithIcon } from "../../components/Notificarion.component";
export default function CreatePost() {
  const [form] = Form.useForm();

  const createDia = useStoreState((state) => state.post.createDia);
  const postLoading = useStoreState((state) => state.post.postLoading);
  const postRes = useStoreState((state) => state.post.postRes);

  const createPost = useStoreActions((action) => action.post.createPost);
  const setPostRes = useStoreActions((action) => action.post.setPostRes);

  const setCreatePostDia = useStoreActions(
    (action) => action.post.setCreatePostDia
  );

  const fetchAllPost = useStoreActions((action) => action.post.fetchAllPost);
  const user = useStoreState((state) => state.auth.user);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (postRes) {
      openNotificationWithIcon("success", "Post Created SuccessFully", "");
      form.resetFields();
      setCreatePostDia();
      fetchAllPost();
    }
    setPostRes(false);
  }, [postRes]);
  function onFinish(value) {
    if (content.trim().length > 0) {
      const postData: any = {
        user: user?.id,
        body: content,
      };
      createPost(postData);
    } else {
    }
  }

  function onCancel() {
    form.resetFields();
    setCreatePostDia();
  }

  function handleChange(text) {
    setContent(text);
  }

  return (
    <Modal
      visible={createDia}
      title="Create Post"
      width="60%"
      okText="Post"
      onOk={onFinish}
      onCancel={() => onCancel()}
      confirmLoading={postLoading}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Content:"
          name="des"
          rules={[{ required: true, message: "Please write Post Content" }]}
        >
          <SunEditor
            placeholder="content:"
            setOptions={{ buttonList: buttonList.formatting }}
            setDefaultStyle="height:auto"
            onChange={(val) => handleChange(val)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

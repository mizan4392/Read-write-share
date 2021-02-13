import { Form, Modal } from 'antd';
import React from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
export const CreatePost: React.FC = ({ children }) => {
    const [form] = Form.useForm()
    return (
        <Modal
            //   visible={createDia}
            title="Create Post"
            width="60%"
            okText="Post"
        //   onOk={onFinish}
        //   onCancel={() => onCancel()}
        //   confirmLoading={postLoading}
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
                    // onChange={(val) => handleChange(val)}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}

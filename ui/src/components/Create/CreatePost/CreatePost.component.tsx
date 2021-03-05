import { Form, Modal } from 'antd';
import React from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
import { useStoreActions, useStoreState } from '../../../hooks/easyPeasy';
export const CreatePost: React.FC = ({ children }) => {
    const { setCreatePostDia } = useStoreActions(action => action.post)
    const { createPostDia } = useStoreState(state => state.post)

    console.log("createPostDia->",createPostDia)
    const [form] = Form.useForm()
    return (
        <Modal
            visible={createPostDia}
            title="Create Post"
            width="60%"
            okText="Post"
            onOk={() => setCreatePostDia(false)}
            onCancel={() => setCreatePostDia(false)}
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

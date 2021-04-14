import { Form, Modal, notification } from 'antd';
import React, { useEffect } from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
import { useStoreActions, useStoreState } from '../../../hooks/easyPeasy';
export const CreatePost: React.FC = ({ children }) => {
    const { setCreatePostDia,createPost,setCreatePostRes } = useStoreActions(action => action.post)
    const { createPostDia,createPostRes,createPostLod } = useStoreState(state => state.post)


    const [form] = Form.useForm()
    useEffect(()=>{
        if(createPostRes){
            notification.success({message:"Post created Successfully"})
            setCreatePostRes(false)
            setCreatePostDia(false)
        }
    },[createPostRes])

    function onFinish(value:any){
        createPost(value)
    }

    return (
        <Modal
            visible={createPostDia}
            title="Create Post"
            width="60%"
            okText="Post"
            onCancel={() => setCreatePostDia(false)}
            okButtonProps={{
                htmlType:'submit',
                form:"create-post",
                loading:createPostLod

            }}
        >
            <Form layout="vertical" form={form} onFinish={onFinish} name="create-post">
                <Form.Item
                    label="Content:"
                    name="body"
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

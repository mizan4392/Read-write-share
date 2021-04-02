import { DatePicker, Input, Modal, notification } from 'antd'
import { Form } from 'antd'
import React, { ReactElement, useEffect } from 'react'
import { useStoreActions, useStoreState } from '../../../hooks/easyPeasy'
import moment from "moment"
interface Props {

}

export default function UpdateUser({ }: Props): ReactElement {

    const {
        updateProfileDia,
        userDetails,
        updateUserRes,
        updateUserLod,
    
     } = useStoreState(s => s.profile)
    const {
        setUpdateProfileDia,
        updateUserProfile,
        setUpdateUserRes,
        getUserDetails
     } = useStoreActions(s => s.profile)

    const [form] = Form.useForm()

    useEffect(()=>{
        if(updateUserRes){
            notification.success({message:"Information Updated Successfully"})
            getUserDetails(userDetails.id)
            setUpdateUserRes(false) 
            onModalClose()
        }
    },[updateUserRes])

    function onFinish(value: any) {
        console.log(value)
        value.id = userDetails.id
        updateUserProfile(value)
    }
    function onModalClose(){
        setUpdateProfileDia(false)
    }
    return (
        <Modal
            visible={updateProfileDia}
            onCancel={() => onModalClose()}
            // onOk={() => setUpdateProfileDia(false)}
            title="Update Profile"
            okText={"Save"}
            okButtonProps={{ htmlType: "submit" ,loading:updateUserLod,form:"updateProfile"}}
        >
            <Form
                layout="vertical"
                form={form}
                onFinish={(value) => onFinish(value)}
                name="updateProfile"
                >
                <Form.Item
                    name="phone"
                    label="Phone:"
                    rules={[{ required: true }]}
                    className="title-Text"
                    initialValue={userDetails?.phone}
                >
                    <Input defaultValue={userDetails?.phone} />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address:"
                    rules={[{ required: true }]}
                    className="title-Text"
                    initialValue={userDetails?.address}
                >
                    <Input defaultValue={userDetails?.address} />
                </Form.Item>
                <Form.Item
                    name="dob"
                    label="Birth Date:"
                    rules={[{ required: true }]}
                    className="title-Text"
                    initialValue={moment(userDetails?.dob)}
                >
                    <DatePicker value={moment(userDetails?.dob)} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

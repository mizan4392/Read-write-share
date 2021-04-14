import { Modal, Form, Input, DatePicker, notification } from 'antd';
import React, { ReactElement, useEffect } from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
import EventType from '../../DropDowns/EventType';
import moment from 'moment'
import { useStoreState, useStoreActions } from '../../../hooks/easyPeasy';
interface Props {

}

export default function CreateEvent({ }: Props): ReactElement {
    const [form] = Form.useForm()

    const { createEventDia ,createEventLod,createEventRes} = useStoreState(state => state.event)
    const { setCreateEventDia,setCreateEventRes ,createEvent} = useStoreActions(action => action.event)

    useEffect(()=>{
        if(createEventRes){
            notification.success({message:"Event created Successfully"})
            setCreateEventRes(false)
            setCreateEventDia(false)
        }
    },[createEventRes])

    function disabledDate(current: any) {
        // Can not select days before today and today
        return current && current < moment().endOf("day");
    }

    function onFinish(value: any) {
        createEvent(value)
     
    }

    return (
        <Modal
            visible={createEventDia}
            title="Create Event"
            width="60%"
            okText="Create"
            onCancel={() => setCreateEventDia(false)}
            okButtonProps={{ form: "create-event", htmlType: "submit",loading:createEventLod }}
        >
            <Form layout="vertical" form={form} onFinish={onFinish} name="create-event">
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
                    <EventType onChange={() => { }} />
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

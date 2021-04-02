
import { EditOutlined } from '@ant-design/icons'
import { Button, Card, Rate, Tooltip } from 'antd'
import React from 'react'
import './userDetailes.css'
import {useStoreActions,useStoreState} from '../../hooks/easyPeasy'
import UpdateUser from '../Modals/updateUser/UpdateUser.component'
import moment from 'moment'

export const UserDetailes: React.FC = ({ children }) => {

    const {setUpdateProfileDia} = useStoreActions(a=>a.profile)
    const { userDetails } = useStoreState(state => state.profile)
    const {updateProfileDia} = useStoreState(s=>s.profile)
    return <div>
        <Card
            style={{ width: 300, height: "300px" }}
            actions={[
                <Tooltip title="Update Profile">
                    <Button icon={<EditOutlined />} style={{width:"80%",borderRadius:"10px"}} onClick={()=>setUpdateProfileDia(true)}></Button>
                </Tooltip>

            ]}
        >
            <div style={{ color: "black", textAlign: "left", marginTop: "80px" }}>
                <div style={{ textAlign: "center" }}> <Tooltip title="Rating"><Rate value={10} disabled /></Tooltip> <span>5.0</span></div>
                <div>
                    <div>
                        <span style={{ color: "black" }}></span>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Phone:{userDetails?.phone}</label>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>
                            Address:{userDetails?.address}
                  </label>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Email: {userDetails?.email}</label>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Birth Date: {moment(userDetails?.dob).format("YYYY-MMM-DD") }</label>
                    </div>
                </div>
            </div>

        </Card>
        {
            updateProfileDia ? <UpdateUser /> : null
        }
    </div>
}


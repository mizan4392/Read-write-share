import React from 'react'
import { Container } from '../../components/comon/Container.component'
import { ProfileCover } from '../../components/profileCover/ProfileCover.component'
import { ProfileTab } from '../../components/profileTab/ProfileTab.component'
import { UserDetailes } from '../../components/userDetailes/UserDetailes.component'
import './profile.css'

export const Profile: React.FC = ({ children }) => {
    return <div>
        <Container>
            <ProfileCover />
            <div style={{ display: "flex" }}>
                <div  style={{ flex:1 }}>
                    <UserDetailes />
                </div>
                <div style={{ flex:2 }}>
                    <ProfileTab />
                </div>

            </div>
        </Container>

    </div>
    // <UserDetailes/>
}

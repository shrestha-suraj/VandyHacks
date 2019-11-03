import React, { Component } from 'react';
import { Row, Col } from 'antd';
import HomeWrapper from './Home/HomeWrapper';
import HabCalWrapper from './HabCal/HabCalWrapper';
import ProfileWrapper from './Profile/ProfileWrapper';
import UserTabBar from './UserTabBar';
import './UserLayout.css';

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        /*
        if (!localStorage.getItem('loggedInUserId')) {
            message.error('You have to sign in first to access this page.', 5);
            return <Redirect to="/authentication" />
        }*/

        return (
            <div className="user-layout-wrapper">
                <Row className="user-content-responsive-wrapper">
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={22} xl={20}>
                        <div className="user-content">
                            {
                                this.props.history.location.pathname === '/'
                                &&
                                <HomeWrapper />
                            }
                            {
                                this.props.history.location.pathname === '/habcal'
                                &&
                                <HabCalWrapper />
                            }
                           
                            {
                                this.props.history.location.pathname === '/profile'
                                &&
                                <ProfileWrapper />
                            }
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                </Row>
                <UserTabBar />
            </div>
        )
    }
}

export default UserLayout;
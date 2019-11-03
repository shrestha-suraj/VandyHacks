import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar, Divider, Button, Icon} from 'antd';
import './ProfileWrapper.css';
import axios from 'axios';

class ProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            phone: ""
        }
    }

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push('/authentication');
    }

    componentDidMount() {
        const email="edsfact@gmail.com"
        axios.get(`http://localhost:5000/api/home/auth=${email}`)
            .then(response => {
                this.setState({
                    fullName:response.data.userData.name,
                    email:response.data.userData.email
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="user-profile-wrapper">
                <div className="user-profile-header">
                    <div>
                        <h1>Hi, {this.state.fullName}</h1>
                    </div>
                    <Avatar size={80} src={"https://pbs.twimg.com/profile_images/1062846911365832705/vEcBrrYv_400x400.jpg"}></Avatar>
                </div>
                <Divider />
                <div className="user-profile-info user-profile-section">
                    <h3><Icon className="user-profile-title-icon" type="profile" /> Personal Info</h3>
                            <div>
                                <div>{this.state.fullName}</div>
                                <div>{this.state.email}</div>
                            </div>
                    
                </div>
                <Divider />
                <Button
                    className="log-out-button"
                    size="large"
                    type="danger"
                    onClick={this.handleLogOut}
                >Log out</Button>
            </div>
        )
    }
}

export default withRouter(ProfileWrapper);
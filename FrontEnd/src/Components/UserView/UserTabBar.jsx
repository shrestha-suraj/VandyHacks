import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import '../../style/TabBar.css';

class UserTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'homeTab',
            hidden: false,
            fullScreen: false,
        };
    }

    componentDidMount() {
        this.updateChoosenTab();
        this.props.history.listen(() => {
            this.updateChoosenTab();
        });
    }

    updateChoosenTab = () => {
        const pathname = this.props.history.location.pathname;

        if (pathname === "/") {
            this.setState({ selectedTab: "homeTab" })
        } else if (pathname === '/orders') {
            this.setState({ selectedTab: "orderTab" })
        } else if (pathname === '/profile') {
            this.setState({ selectedTab: "profileTab" })
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 10 }}>
                <TabBar
                    unselectedTintColor="#595959"
                    tintColor="#1890ff"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        icon={
                            <Icon type="smile" />
                        }
                        selectedIcon={
                            <Icon type="smile" />
                        }
                        title="Avatar"
                        key="Avatar"
                        selected={this.state.selectedTab === 'homeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'homeTab',
                            });
                            this.props.history.push("/");
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                   
                    <TabBar.Item
                        icon={
                            <Icon type="calendar" />
                        }
                        selectedIcon={
                            <Icon type="calendar" />
                        }
                        title="HabCal"
                        key="HabCal"
                        selected={this.state.selectedTab === 'orderTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'orderTab',
                            });
                            this.props.history.push("/habcal");
                        }}
                    >
                    </TabBar.Item>
                   
                    <TabBar.Item
                        icon={
                            <Icon type="user" />
                        }
                        selectedIcon={
                            <Icon type="user" />
                        }
                        title="Profile"
                        key="Profile"
                        selected={this.state.selectedTab === 'profileTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'profileTab',
                            });
                            this.props.history.push("/profile");
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(UserTabBar);
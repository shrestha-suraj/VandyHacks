import React, { Component } from 'react';
import '../../../style/Dashboard.css';
import Spinner from '../../Spinner';
import axios from 'axios';

const avatar = {
    4: "http://giphygifs.s3.amazonaws.com/media/efy3pnbPVjNPa/giphy.gif",
    7: "http://giphygifs.s3.amazonaws.com/media/33OrjzUFwkwEg/giphy.gif",
    5: "https://media.giphy.com/media/3ml2103dRc6qDQy6z9/giphy.gif",
    6: "http://giphygifs.s3.amazonaws.com/media/273P92MBOqLiU/giphy.gif",
    3: "https://media.giphy.com/media/wx2gdQfoc42DC/giphy.gif",
    2: "https://media.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif",
    1: "https://media.giphy.com/media/YqE3jbSQQR6x9g19Kj/giphy.gif"
}

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            points: 0,
            life: '',
            exp: 100
        }
    }

    componentDidMount() {
        const email = "edsfact@gmail.com"
        axios.get(`http://localhost:5000/api/home/auth=${email}`)
            .then(response => {
                this.setState({
                    points: response.data.userData.DPoints.Score,
                    life: response.data.userData.Health,
                    exp: response.data.userData.EXP,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <div className="dasboard-content-wrapper">
                <center><h1>Day Score:  {this.state.points}</h1></center>
                
                <img className="avatar-img" src={avatar[7]} alt="Your avatar for the day"/>
                <div className="stats">
                <h3><center>Health :  {this.state.life}</center> </h3>
                <h3><center>Experience:  {this.state.exp}</center> </h3>
                </div>
            </div>
        )
    }
}

export default DashboardContent;
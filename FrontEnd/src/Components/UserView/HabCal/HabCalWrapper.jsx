import React, { Component } from 'react';
import Calender from "./Calender";

class HabCalWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calenderData: {}

        }
    }


render() {
    return (
        <div>
           <Calender/>
        </div>
    )
}
}

export default HabCalWrapper;

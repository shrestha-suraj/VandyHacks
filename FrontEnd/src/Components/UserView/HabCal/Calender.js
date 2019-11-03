import React, {Component} from 'react';
import CalenderData from './Calender.json';
import './CalenderCard.css';
import No from './icons/no.png';
import Yes from './icons/yes.png';

class Calender extends Component{

    constructor(props){
        super(props);
        this.state={};
        this.decreasePoints=this.decreasePoints.bind(this);
        this.increasePoints=this.increasePoints.bind(this);
    }

    decreasePoints(e){
        document.querySelector(`.each-card[data-key="${e}"]`).remove();
    }

    increasePoints(e){
        document.querySelector(`.each-card[data-key="${e}"]`).remove();
    }

    render(){
        return(
            <div>
                {CalenderData.map((calenderData,index)=>{
                    return (
                        <div className="each-card" data-key={calenderData.id} >
                            <h3 className="habit-text">{calenderData.habit}</h3>
                            <img onClick={(e)=>this.decreasePoints(calenderData.id)} className="cal-buttons" src={No} alt="no-button"/>
                           <img onClick={(e)=>this.increasePoints(calenderData.id)} className="cal-buttons" src={Yes} alt="yes-button"/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Calender;
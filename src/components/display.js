import React from 'react';
import './display.css';

class Display extends React.Component{
    render(){
        return(
            <div className = 'disp'>
                <img src = {this.props.image} alt = 'Information'/>
                <div className = 'text'>
                    <h1 className = 'txt'>{this.props.PersonName}</h1>
                    <p id = 'addr'>{this.props.PersonAddress}</p>
                    <p id = 'gender'>{this.props.PersonGender}</p>
                 </div>   
            </div>
        )
    }
}

export default Display;
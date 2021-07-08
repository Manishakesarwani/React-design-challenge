import React from 'react';
import './Details.css';
import Display from './display';
import axios from 'axios';
import PersonInfo from './PersonInfo';




class Info extends React.Component{

    state = {
        PersonDetails: [],
        Name: null,
        Address: null,
        Gender: null,
        Pic: null
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20').then(res =>{
            console.log(res);
            var PersoI = res.data.results;
            this.setState({
                PersonDetails: PersoI
            })
            console.log(this.state.PersonDetails);
            }
        )
    }

    handleChange = (PersonI) =>{

        //Fetching name
        var fname = PersonI.name.first;
        var lname = PersonI.name.last;
        var title = PersonI.name.title;
        var n = title+". "+fname+" "+lname;

        //Fetching address
        var g = PersonI.gender;

        //Fetching address
        var num = PersonI.location.street.number;
        var name =  PersonI.location.street.name;
        var state =  PersonI.location.state;
        var postcode =  PersonI.location.postcode;
        var offset =  PersonI.location.timezone.offset;
        var dpt =  PersonI.location.timezone.description;
        var country =  PersonI.location.country;
        var a = num+", "+name+", "+state+", "+postcode+" "+offset+"-"+dpt+", "+country;

        var pic = PersonI.picture.thumbnail;
        console.log(pic);
        this.setState({
            Name: n,
            Address: a,
            Gender: g,
            Pic: pic
        })
    }


    render(){
        return(
           <div>
               <Display PersonName = {this.state.Name} PersonAddress = {this.state.Address} PersonGender = {this.state.Gender} image = {this.state.Pic}/>
               <div  className = "Details">
                    {this.state.PersonDetails.map((value, idx) => {
                   return <PersonInfo key = {idx} index = {idx} arr = {value} click = {this.handleChange}/>
                    })} 
               </div>
                
           </div>
        )
    }
}
export default Info; 
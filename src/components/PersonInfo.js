import React from 'react';
import './PersonInfo.css';



class PersonInfo extends React.Component{
 
    state = {
        Person: Array(20).fill(null), 
        PersonName: null,
        PersonEmail: null,
        PersonGender: null,
        PersonAddress: null   
     }

    componentDidMount(){
        //var idx = this.props.index;
        var copyPerson = this.props.arr;

        //Fetching Email
        var emails = copyPerson.email;

        //Fetching Name
        var fname = copyPerson.name.first;
        var lname = copyPerson.name.last;
        var title = copyPerson.name.title;
        var names = title+". "+fname+" "+lname;

        //Fetching Gender
        var genders = copyPerson.gender + " . NL";


        //Feching Address
        var num = copyPerson.location.street.number;
        var n = copyPerson.location.street.name;
        var state = copyPerson.location.state;
        var postcode = copyPerson.location.postcode;
        var offset = copyPerson.location.timezone.offset;
        var dpt = copyPerson.location.timezone.description;
        var country = copyPerson.location.country;
        var addresses = num+", "+n+", "+state+", "+postcode+" "+offset+"-"+dpt+", "+country;


        this.setState({
            PersonEmail: emails,
            PersonName: names,
            PersonGender: genders,
            PersonAddress: addresses,
            Person: copyPerson
        })
        
        
    }

   handleClick = () => {
        var copyP = this.state.Person;
        this.props.click(copyP);       
    }
    
    render(){
        return(
            <div className = 'PersonInfo' onClick = {this.handleClick}>
                <p id = 'gender'>{this.state.PersonGender}</p>
                <h3 id = 'name'>{this.state.PersonName}</h3>
                <p id ='email'>{this.state.PersonEmail}</p>
            </div>
        );
    }
}

export default PersonInfo;
import React, { Component } from 'react';
import { Text,View } from "react-native";

export default class SecondScreen extends Component
{
   constructor(props)
   {
       super(props)
       {
           this.state={
                data:[]
           }
       }
   }

   componentDidMount(){

    const data=this.props.route.params.astroidId
    console.log("Astroid id",data)
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${data}?api_key=fI2eNwr318OqhcJm0Avfn5TszH8zjRFkxvB2kgih`)
    .then(response=>response.json())
     .then(responseJson => {
          this.setState({
             data: responseJson
      });
  // console.log("Value of json",this.state.data)
 })
}

    render(){
        
        //console.log("Data value is",this.state.data.name)
        return(
            <View>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:30,marginTop:50}}>
            Name:{this.state.data.name}
            </Text>

            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:30,marginTop:50}}>
            NASA_JPL_URL:{this.state.data.nasa_jpl_url}
            </Text>

            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:30,marginTop:50}}>
            HAZARDOUS_ASTEROID:
            {this.state.data.is_potentially_hazardous_asteroid}
            </Text>

            </View>
        )
    }
}
import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class ThirdScreen extends Component
{
   
   constructor(){
       super()
       {
           this.state={
               id:'',
               data:[]
           }
       }
   }

   componentDidMount(){
    const id=this.props.route.params.astroidId
    console.log("Value od id is",id)
       fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=fI2eNwr318OqhcJm0Avfn5TszH8zjRFkxvB2kgih`)
       .then(response=>response.json())
       .then(responseJson=>{
           this.setState({
               data:responseJson
           })
          // console.log("Value of name",this.state.data.name)
       })
   }
   

   
   
    render()
    {
       
       console.log("Value is ",this.state.data.is_potentially_hazardous_asteroid)
        return(
            <View>
           
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:40,marginLeft:20}}>
            Name:{this.state.data.name}
            </Text>

            <Text style={{fontWeight:'bold',fontSize:20,marginTop:40,marginLeft:20}}>
            NASA_JPL_URL:{this.state.data.nasa_jpl_url}
            </Text>

            <Text style={{fontWeight:'bold',fontSize:20,marginTop:40,marginLeft:20}}>
            HAZARDOUS_ASTEROID:
            {this.state.data.is_potentially_hazardous_asteroid}
            </Text>

            </View>
        )
    }
}
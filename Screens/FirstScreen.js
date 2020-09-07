import React, { Component } from "react";
import {Text,View, TouchableOpacity,TextInput} from 'react-native';


export default class FirstScreen extends Component
{
   
   constructor(props){
       super(props)
       this.state={
       
        astroidId:''
        
       }
   }

   componentDidMount(){
    fetch("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY")
    .then(response=>response.json())
    .then(responseJson=>{
        this.setState({
            data:responseJson
        })
       // console.log("Response JSON",this.state.data)
    })
}


    render()
    {
       const astroidId=this.state.astroidId
       console.log("Astroid id",astroidId)
        return(
                <View>
                <TextInput
                placeholder="Enter AstroidId"
                value={this.state.astroidId}
                onChangeText={(text)=>this.setState({astroidId:text})
                }
               
                style={{marginTop:50,fontSize:20,borderRadius:5,borderWidth:2,fontWeight:'bold',textAlign:'center',alignContent:'center',marginLeft:10,marginRight:10,borderColor:'red'}}
                />
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SecondScreen",{
                astroidId:this.state.astroidId
            })}>
                <Text style={{fontSize:22,marginLeft:20,textAlign:'center',marginTop:50,borderColor:'#ff7f50',borderWidth:2,marginRight:15,backgroundColor:'#00ffff'}}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ThirdScreen",{
                    astroidId:this.state.data.id
                })}>
                <Text style={{fontSize:22,marginLeft:20,textAlign:'center',marginTop:50,borderColor:'#8a2be2',borderWidth:2,marginRight:15,backgroundColor:'#00bfff'}}>Random Astroid</Text>
                </TouchableOpacity>
                </View>
        )
    }
}

// import React from 'react';


// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   View,
//   Button 
// } from 'react-native';



// export default function LoginContainer() {
//   return (<ScrollView style={{padding: 20}}>
//     <Text 
//         style={{fontSize: 27}}>
//         Login
//     </Text>
//     <TextInput placeholder='Username' />
//     <TextInput placeholder='Password' />
//     <View style={{margin:7}} />
//     <Button 
              
//               title="Submit"
//           />
//       </ScrollView>);
// }

// LoginContainer.navigationOptions = {
//   header: null,
// };

import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';


export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin = () => {
    const {username,password} = this.state
    this.props.NavigatetoMainPage(username,password);
  }

  render() {
        return (
      <View style={styles.Maincontainer}>
        
         
      
      <View style={styles.container}>
      <View style={styles.Subcontainer}>
          <Text style={styles.title}>Wellcome to Map Applications</Text>
        </View>
       
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/52/000000/name.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="username"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/private2.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Pin"
              keyboardType="numeric"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

      
      </View>
      </View>
    );
  }
}

LoginContainer.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  Maincontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  Subcontainer:{
    marginBottom:100
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  title :{
    color: 'black',
    fontSize: 25,
    alignItems:"center"
  }
});



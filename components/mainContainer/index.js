import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginContainer from '../../Login/LoginContainer';
import AppNavigator from '../../navigation/AppNavigator';

export default class MainContainer extends Component {

  componentDidMount(){
  }

  state = { intial: true,
    LoadApp :false,
    username:'',
    password:''
  
  };

  NavigatetoMainPage = (user,pass) => {
    
    this.setState({
      intial:false,
      LoadApp:true
    })

  };



  render() {
  

    return (
        <View style={styles.container}>
            {this.state.intial &&
                <LoginContainer 
                  NavigatetoMainPage = {this.NavigatetoMainPage}
                />  
            }
            {this.state.LoadApp &&
             <AppNavigator
              username={this.state.username}
             />

            }
        </View>
      
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  


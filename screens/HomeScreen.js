import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import MapView from 'react-native-maps';


import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Button 
} from 'react-native';

import { MonoText } from '../components/StyledText';
// import Button from '@material-ui/core/Button';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      region:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      currentLocation: [],
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta:'',
      longitudeDelta:'',
     
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        let getlatitude = position.coords.latitude
        let getlongitude = position.coords.longitude
 

        // console.log(map.getregion,'map.getregion')
        this.setState({
          latitude:getlatitude,
          longitude:getlongitude
        })
        const location = JSON.stringify(position);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    ); 

  }

  render(){
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude:this.state.longitude,
                    latitudeDelta: 0.0,
                    longitudeDelta: 0.0,
                }}
              >
              <MapView.Marker
                  coordinate={{latitude: this.state.latitude,
                  longitude:this.state.longitude}}
                  title={"My Location"}
                  description={"This is defined as you current location"}
              />
            </MapView>
          </View>);
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});



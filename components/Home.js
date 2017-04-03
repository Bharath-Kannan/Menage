import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet, Navigator}  from 'react-native';


export default class Home extends Component{
    render(){
        return(
             <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Menage App!
        </Text>
        <Text style={styles.instructions}>
          Family In Sync!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Home',()=>Home);
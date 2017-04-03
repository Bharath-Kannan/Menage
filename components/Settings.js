import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet, Navigator}  from 'react-native';


export default class Settings extends Component{
    render(){
        return(
            <View>
                <Text>The Settings Page</Text>
                 <Text>To be Implemneted</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Settings',()=>Settings);
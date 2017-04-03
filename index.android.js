import React, {Component} from 'react';
import {AppRegistry,View,Text,DrawerLayoutAndroid, Image,ListView, Navigator, TouchableHighlight}  from 'react-native';

import Settings from './components/Settings';
import Home from './components/Home';
import Menu from './components/Menu';

export default class Menage extends Component{

renderScene(route, navigator){
    switch(route.id){ 
      case 'Home':
        return (
       <DrawerLayoutAndroid
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <Menu route={route.id} navigator={navigator} /> }>
            <Home route={route.id} navigator={navigator} />
       </DrawerLayoutAndroid>
    )

      case 'Settings':
         return (
          <DrawerLayoutAndroid
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() =><Menu route={route.id} navigator={navigator} />}>
            <Settings route={route.id} navigator={navigator} />
          </DrawerLayoutAndroid>
         )
    }
  }

render() {
  return (
      <Navigator 
        ref="navigator"
        initialRoute={{name: "Home", id: "Home"}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack)=>Navigator.SceneConfigs.HorizontalSwipeJump}
      />
    );
}
}

AppRegistry.registerComponent('Menage', () => Menage);



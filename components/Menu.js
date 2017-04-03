import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet, Navigator, ListView, TouchableHighlight, Image}  from 'react-native';


export default class Menu extends Component{
 constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

   componentDidMount() {
    var menuItems = [
      {title: 'Home', id: 'Home'},
      {title: 'Settings', id: 'Settings'},
    ]

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(menuItems)
    });
  }

  _renderMenuRow(rowData) {
    return (
      <TouchableHighlight underlayColor='#f4f4f4' onPress={this._onPress.bind(this, rowData.id)}>
          <View style={styles.row}>
          <Text style={styles.rowText}>{rowData.title}</Text>
          </View>
      </TouchableHighlight>
   );
  }

  _onPress(id) {
    this.props.navigator.push({
     id: id,
    });
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Image style={{width:300, height:200, overflow:'visible'}} source={require('../images/logo.png')} >
            <Text style={{marginTop:160, fontWeight: 'bold'}}> User Name </Text>
            <Text style={{fontStyle:'italic', fontSize:10}}> User Phone Number </Text>
        </Image>
          <ListView
            style={{margin: 10}}
            dataSource={this.state.dataSource}
            renderRow={this._renderMenuRow.bind(this)}
            enableEmptySections={true}
        />
        </View>
    );
  };
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    padding:10,
    marginBottom:3
  },
  rowText:{
    flex:1
  }
});

AppRegistry.registerComponent('Menu',()=>Menu);
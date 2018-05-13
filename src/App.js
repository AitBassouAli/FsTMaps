import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Drawer, Button, Icon } from 'native-base';
import HeaderComponent from './components/Header';
import BodyContent from './components/bodyContent';
import SideBar from './components/sideBarMenu';


export default class App extends Component {

  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <HeaderComponent openDrawer={()=>this.openDrawer()} />
          <BodyContent style={styles.container} />
        </Container>
      </Drawer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  }
});

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Button, Icon, Header, Left, Right, Body, Title } from 'native-base';
import HeaderComponent from './Header';

export default class EventsScreen extends Component {

    


    static navigationOptions = {
        drawerIcon: (
            <Image source={require('../images/appIcon.png')}
                style={{ height: 24, width: 24 }} />
        )
    }
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {
        return (
            <Container>
                <HeaderComponent openDrawer={() => this.openDrawer()}
                />
                <Content contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>Evenements d'aujourd'hui</Text>
                    <Text>lister les Evenements avec les infos associeé</Text>
                    {/* <TouchableOpacity>
                        {this.state.results.map((text, index) => {
                            return (
                                <Text key={index}>{text}</Text>
                            )
                        })}
                    </TouchableOpacity> */}
                </Content>
            </Container>
        );
    }
}


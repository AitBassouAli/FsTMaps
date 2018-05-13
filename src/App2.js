import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Container, Content, Header, Body } from 'native-base';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScrean from './components/HomeScrean';
import SettingsScrean from './components/SettingsScrean';
import EventsScreen from './components/EventsScreen';
import SideBarMenu from './components/sideBarMenu';


export default class App extends Component {
    render() {
        return (
            <MyApp />
        );
    }
}

const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={{ height: 180, backgroundColor: 'white' }}>
            <Body style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 57, marginLeft: 60 }}>
                    <Text style={{ fontSize: 36, color: '#0066cc' }}>F S </Text>
                    <Text >Tetouan</Text>
                </View>
                <Image
                    style={styles.drawerImage}
                    source={require('./images/appIcon.png')} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

const MyApp = DrawerNavigator({
    Accueil: {
        screen: HomeScrean
    },
    Salles: {
        screen: SettingsScrean
    },
    Amphis: {
        screen: SettingsScrean
    },
    Scolarité: {
        screen: SettingsScrean
    },
    Bibliothèque: {
        screen: SettingsScrean
    },
    Buvette: {
        screen: SideBarMenu
    },
    Evenements: {
        screen: EventsScreen
    }
}, {
        initialRouteName: 'Accueil',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    })


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerImage: {
        height: 120,
        width: 120,
        borderRadius: 75,
        marginLeft: -30
    }
});

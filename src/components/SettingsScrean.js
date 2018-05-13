import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Button, Icon, Header, Left, Right, Body, Title } from 'native-base';
import MapView from 'react-native-maps';
import HeaderComponent from './Header';
import mapImage from '../images/FSTMaps.png'
const leftTop = [35.562784, -5.365009];
const rightBottom = [35.560406, -5.360535];

export default class SettingsScrean extends Component {
    constructor(props) {
        super();
        this.state = {
            loaded: false,
            marcker: []
        }
    }
    static navigationOptions = {
        drawerIcon: (
            <Image source={require('../images/appIcon.png')}
                style={{ height: 24, width: 24 }} />
        )
    }
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen')
    }
    setStateAfterRecord() {
        this.setState({
            loaded: true
        })
    }

    addMarckers(numero) {
        const marckers = [{
            id: [1, "un", "one", "salle 1", "salle un", "classroom","classroom 1"],
            latitude: 35.562615,
            longitude: -5.364093,
            title: "marcker 1"
        },
        {
            id: [2, "deux", "two", "salle 2", "salle deux", "classroom","classroom 2"],
            latitude: 35.561526,
            longitude: -5.360751,
            title: "marcker 2"
        },
        {
            id: [3, "trois", "three", "salle 3", "salle trois", "classroom","classroom 3"],
            latitude: 35.562184,
            longitude: -5.363071,
            title: "marcker 3"
        },
        {
            id: [4, "quatre", "four", "salle 4", "salle quatre", "classroom","classroom 4"],
            latitude: 35.560528,
            longitude: -5.363589,
            title: "marcker 4"
        }
        ];
        if (this.state.loaded) {
            this.setState({
                marcker: marckers.filter(item => this.verify(item, numero))
            })
        }
    }
    verify(item, numero) {
        for (let i = 0; i < numero.length; i++) {
            for (let j = 0; j < item.id.length; j++) {
                if (item.id[j] == numero[i]) {
                    return true;
                }
            }
        }
    }

    render() {
        const markers = this.state.marcker.map((markerInfo) =>
            <MapView.Marker
                coordinate={{ latitude: markerInfo.latitude, longitude: markerInfo.longitude }}
                title={markerInfo.title}
                description="Faculté des sciences Tetouan"
                key={markerInfo.id}
            />);
        return (
            <Container>
                <HeaderComponent openDrawer={() => this.openDrawer()}
                    addMarckers={(x) => this.addMarckers(x)}
                    setStateAfterRecord={() => this.setStateAfterRecord()}
                />
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 35.561924,
                            longitude: -5.362540,
                            latitudeDelta: 0.0028,
                            longitudeDelta: 0.0028,
                        }}
                        showsUserLocation={true}
                    >
                        {/* <MapView.Polygon
                        coordinates={[
                            { latitude: 35.562615, longitude: -5.364093 },
                            { latitude: 35.560528, longitude: -5.363589 },
                            { latitude: 35.560618, longitude: -5.362782 },
                            { latitude: 35.560919, longitude: -5.361864 },
                            { latitude: 35.561526, longitude: -5.360751 },
                            { latitude: 35.562765, longitude: -5.361931 },
                            { latitude: 35.562184, longitude: -5.363071 },
                            { latitude: 35.562568, longitude: -5.363339 }
                        ]}
                        fillColor="rgba(0,0,255,0.2)"
                        strokeColor="orange"
                        strokeWidth={2}
                    /> */}
                        <MapView.Marker
                            title="FS Tetouan"
                            description="Faculté des sciences Tetouan"
                            coordinate={{ latitude: 35.561646, longitude: -5.362583 }}
                            pinColor="green"
                        />
                        {markers}
                        <MapView.Overlay bounds={[leftTop, rightBottom]} image={mapImage} />
                    </MapView>
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flex: 1
    }
});
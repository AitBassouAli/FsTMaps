import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Button } from 'native-base';
import HeaderComponent from './Header';

export default class HomeScrean extends Component {
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('../images/appIcon.png')}
                style={{ height: 24, width: 24 }} />
        )
    }

    render() {
        return (
            <Container>
                <HeaderComponent openDrawer={() => this.openDrawer()}
                />
                <Content contentContainerStyle={{
                    marginTop: 1
                }}>
                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeft}
                            onPress={() => this.props.navigation.navigate('Salles')}>
                            <Text>SALLES</Text>
                        </Button>
                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('Amphis')} >
                            <Text>Amphis</Text>
                        </Button>
                    </View>

                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeft}
                            onPress={() => this.props.navigation.navigate('Scolarité')}>
                            <Text>Scolarité</Text>
                        </Button>
                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('Buvette')}>
                            <Text>Buvette</Text>
                        </Button>
                    </View>

                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeft}
                            onPress={() => this.props.navigation.navigate('Bibliothèque')}>
                            <Text>Bibliothèque</Text>
                        </Button>
                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('Bibliothèque')}>
                            <Text>Mosqué</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 65
    },
    buttonLeft: {
        marginLeft: 20,
        height: 100,
        width: 135,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    buttonRight: {
        marginRight: 20,
        height: 100,
        width: 135,
        borderRadius: 5,
        backgroundColor: 'white'
    }


});


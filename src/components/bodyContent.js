import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Card, Header, Content, Button, Text } from 'native-base';
export default class BodyContent extends Component {
    render() {
        return (
            <View  style={styles.container}>
            <Content>
            <Card>
            <Button block large  danger>
                <Text>SALLES</Text>
            </Button>
            </Card>
                <Card>
                <Button block large >
                    <Text>Amphis</Text>
                </Button>
                </Card>
                <Card>
                <Button block large  success>
                    <Text>Scolarité</Text>
                </Button>
                </Card>
                <Card>
                <Button block large  info>
                    <Text>Buvette</Text>
                </Button>
                </Card>
                <Card>
                <Button block large  warning>
                    <Text>Bibliothèque</Text>
                </Button>
                </Card>
            </Content>
            </View>
        );
    }
}
const styles=StyleSheet.create({

    container: {
        flex: 1,

        marginTop:100
      }

});
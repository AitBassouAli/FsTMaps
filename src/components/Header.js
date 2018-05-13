import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Text, TouchableHighlight } from 'react-native';
import { Header, Left, Right, Button, Icon, Item, Input } from 'native-base';
import Voice from 'react-native-voice';
export default class HeaderComponent extends Component {
    state = {
        results: [],
        isModalOpen: false
    }
    constructor() {
        super();
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    }

    onSpeechStartHandler() {
        Voice.start('en-US');
    }
    onSpeechEndHandler() {
        Voice.stop();
        this.setState({
            results: "",
            isModalOpen: false
        });
        const { setStateAfterRecord } = this.props;
        setStateAfterRecord();
    }
    onSpeechResultsHandler(e) {
        this.setState({
            results: e.value
        });
        const { addMarckers } = this.props;
        addMarckers(this.state.results);
    }
    onSpeechStart(e) {
        this.setState({
            isModalOpen: true
        })
    }

    render() {
        const { openDrawer } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Right>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: "100%", width: 300, justifyContent: 'center', marginLeft: -50 }}>
                            <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                                <Icon name="search" style={{ fontSize: 24 }} />
                                <Input placeholder="Search" />
                            </Item>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableWithoutFeedback
                                onPress={this.onSpeechStartHandler.bind()}
                                onLongPress={this.onSpeechStartHandler.bind()}
                            >
                                <View style={styles.button} >
                                    <Icon name='mic' style={styles.buttonIcon} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </Right>
                <Modal visible={this.state.isModalOpen}
                    onRequestClose={() => this.setState({ isModalOpen: false })} animationType={"fade"}
                    transparent={true}>
                    <View  >
                        <View style={styles.model}>
                            <Item style={styles.modalContent} >
                                <Text>disez quelque chose ...</Text>
                                <TouchableHighlight style={styles.cancelModalBtn}
                                    onPress={() => {
                                        this.setState({ isModalOpen: false });
                                    }}>
                                    <Text style={styles.cancelModalBtnText}>Annuler</Text>
                                </TouchableHighlight>
                            </Item>
                        </View>
                    </View>
                </Modal>
            </Header >
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginRight: -6,
    },
    buttonIcon: {
        padding: 20,
        color: 'white'
    },
    model: {
        justifyContent: 'center',
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f5f5dc',
        borderRadius: 5
    },
    modalContent: {
        padding: 20,
        justifyContent: 'space-between'
    },
    cancelModalBtn: {
    },
    cancelModalBtnText: {
        padding: 20,
        color: 'red'
    }
});
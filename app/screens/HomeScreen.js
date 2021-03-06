import React, { Component } from 'react';
import axios from 'axios';

import {SafeAreaView,ActivityIndicator,FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
 
    componentDidMount() {
        return axios.get(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/status`)
        .then(response => {    
            this.setState({
                isLoading: false,
                dataSource: response.data
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.dataSource) {
            return axios.get(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/status`)
            .then(response => {
                this.setState({
                    isLoading: false,
                    dataSource: response.data
                })                
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } 
        else {
            const Item = ({ item, onPress}) => (
                <TouchableOpacity onPress={onPress} style={styles.item}>
                  <Text  style={styles.item}>Elevator ID: {item.id}</Text>
                </TouchableOpacity>
              );
            

            const renderItem = ({ item }) => {
              
              return (
                
                <Item
                  item={item}
                  onPress={() => this.props.navigation.navigate('Status', {id : `${item.id}`})}
                />
              );
            };
            
            return (
                <ImageBackground
                style={styles.background} >
                        <SafeAreaView style={styles.container}>
                        <FlatList
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            data={this.state.dataSource}
                        />
                        </SafeAreaView>
                    
                    <TouchableOpacity style={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
    }
 
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        fontSize: 30,
        flex: 1,
        alignSelf: 'stretch',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'

    },
    loginButton:{
        borderRadius: 5,
        alignItems: 'center',
        height: 75,
        width: '75%',
        padding: 20,
        backgroundColor: '#1E90FF',
    },
    text: {
        fontSize: 24,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        
    },
})
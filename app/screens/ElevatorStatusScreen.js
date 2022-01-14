import React, { Component } from 'react';
import axios from 'axios';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Item,SafeAreaView,ActivityIndicator,FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        dataSource: [],
        
    }
 
    componentDidMount() {
        return axios.get(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/${item.id}`)
        .then(response => {
                this.setState({
                    isLoading: false,
                    dataSource: response.data
                })
            
        })
                
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
            return (
                <ImageBackground
                style={styles.background} >
                        <SafeAreaView style={styles.container}>
                            <Text style={styles.item}>ID: {this.state.dataSource.id}</Text>
                            <Text style={styles.item}>Serial Number: {this.state.dataSource.serial_number}</Text>
                            <Text style={styles.item}>Model: {this.state.dataSource.model}</Text>
                            <Text style={styles.item}>Status: {this.state.dataSource.status}</Text>
                            <Text style={styles.item}>Date of Last Inspection: {this.state.dataSource.date_of_last_inspection}</Text>
                            <Text style={styles.item}>Created at: {this.state.dataSource.created_at}</Text>
                            <Text style={styles.item}>Column id: {this.state.dataSource.column_id}</Text>
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
        fontSize: 24,
        flex: 1,
        alignSelf: 'stretch',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'

    },
    logo: {
        position: "absolute",
        top: 80,
        width: '100%',
        height: 100, 
        
    },

    loginButton:{
        borderRadius: 5,
        alignItems: 'center',
        width: '50%',
        padding: 10,
        backgroundColor: '#1E90FF',

    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        
    },
    textblack: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'black',
        
    },
    input : {
        bottom: 250,
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderRadius:5,
        borderColor: '#e8e8e8',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    inputtext : {
        fontSize: 24,
        color: 'black',

    }
    
})
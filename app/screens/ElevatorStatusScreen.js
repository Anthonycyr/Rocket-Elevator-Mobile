import React, { Component } from 'react';
import axios from 'axios';
import {SafeAreaView,ActivityIndicator,ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }
 
    componentDidMount() {
        const id = this.props.navigation.state.params.id;
        return axios.get(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/${id}`)
        .then(response => {
            this.setState({
                isLoading: false,
                dataSource: response.data
            })
        })
    }

    componentDidUpdate(prevState) {
        if (prevState.dataSource !== this.state.dataSource) {
            const id = this.props.navigation.state.params.id;
            return axios.get(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/${id}`)
            .then(response => {
                this.setState({
                    isLoading: false,
                    dataSource: response.data
                })
            })
        }
    }

    async endTask() {
        const response = await axios.patch(`https://rocketfuelapifoundation.herokuapp.com/api/Elevators/online/${this.state.dataSource.id}`);
        alert(response.data);
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
                        <Text style={styles.item} >ID: {this.state.dataSource.id}</Text>
                        <Text style={styles.item}>Serial Number: {this.state.dataSource.serial_number}</Text>
                        <Text style={styles.item}>Model: {this.state.dataSource.model}</Text>
                        <Text style={this.state.dataSource.status ==  'Online' ? styles.itemOnline :styles.itemOffline }>Status: {this.state.dataSource.status}</Text>
                        <Text style={styles.item}>Date of Last Inspection: {this.state.dataSource.date_of_last_inspection}</Text>
                        <Text style={styles.item}>Created at: {this.state.dataSource.created_at}</Text>
                        <Text style={styles.item}>Column id: {this.state.dataSource.column_id}</Text>
                    </SafeAreaView>
                    <TouchableOpacity style={this.state.dataSource.status ==  'Online' ? styles.returnButton :styles.loginButton }
                    onPress={() =>this.state.dataSource.status ==  'Online' ? this.props.navigation.navigate('Home') :this.endTask()}>
                        <Text style={this.state.dataSource.status ==  'Online' ? styles.textblack :styles.text}>{this.state.dataSource.status ==  'Online' ? 'Return' :'End Task' }</Text>
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
    itemOffline: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'stretch',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        color: '#ff5454'
    },
    itemOnline: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'stretch',
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        color: '#56be37'
    },
    loginButton:{
        borderRadius: 5,
        alignItems: 'center',
        height: 100,
        width: '75%',
        padding: 10,
        backgroundColor: '#1E90FF',
    },
    returnButton:{

        borderRadius: 5,
        alignItems: 'center',
        height: 100,
        width: '75%',
        padding: 10,
        backgroundColor: '#316eaa',

    },
    statusColor: {
        right: 100,
        borderRadius: 5,
        alignItems: 'center',
        width: '25%',
        padding: 10,
        backgroundColor: '#ff2828',
    },
    text: {
        position: "absolute",
        top: '40%',
        fontSize: 26,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        
    },
    textblack: {
        position: "absolute",
        top: '40%',
        fontSize: 26,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
})
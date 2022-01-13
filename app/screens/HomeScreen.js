import React, { Component } from 'react';
import axios from 'axios';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends Component {
    state = {
        email: ''
    }
 
    getValues() {
        return axios.get(`https://rocketfuelapifoundation.herokuapp.com/email/${this.state.email}`)
        .then(response => {
            alert(response.data);
        })
                
    }

    render() {
        return (
            <ImageBackground
            style={styles.background} >
                <View style={styles.input}>
                    <TextInput 
                    style={styles.inputtext} 
                    placeholder='email' 
                    onChangeText={(text) => this.setState({ email: text })}/>
                </View>
                <TouchableOpacity style={styles.loginButton}
                onPress={() => this.getValues()}>
                    <Text style={styles.text}>Sam</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
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
    logo: {
        position: "absolute",
        top: 80,
        width: '100%',
        height: 100, 
        
    },
    loginButton:{
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#1E90FF',
        bottom: 200
    },
    text: {
        fontSize: 24,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        
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
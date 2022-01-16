import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View>
            <Image style={{ width: 40, height: 40 }} source={require("../assets/android-chrome-144x144.png")}/>
        </View>
    )
}

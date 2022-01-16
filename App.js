
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Logo from "./app/shared/logo";
import ElevatorStatusScreen from "./app/screens/ElevatorStatusScreen";
import { Image } from "react-native";

const RootStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackImage: () => <Logo />,
        headerStyle: {
          backgroundColor: '#86bbef'
        } 
      }
    },
    Status: {
      screen: ElevatorStatusScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#86bbef'
        } 
      }
    } 
  },
  {
    initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}





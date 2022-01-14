
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ElevatorStatusScreen from "./app/screens/ElevatorStatusScreen";

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Home: HomeScreen,
    Status: ElevatorStatusScreen
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





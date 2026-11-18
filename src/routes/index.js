import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen"; 
import DetailScreen from "../screens/DetailScreen";
import { Component } from "react";

const Stack = createNativeStackNavigator();

export default class Routes extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{title: 'Tela principal'}}
                    />
                    <Stack.Screen
                        name="Details"
                        component={DetailScreen}
                        options={{title: 'Tela detalhes'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
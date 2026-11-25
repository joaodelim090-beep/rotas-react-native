import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import HomeScreen from "../screens/HomeScreen"; 
//import DetailScreen from "../screens/DetailScreen";
import Login2 from "../screens/Login2";
import Home from "../screens/Home";

import { Component } from "react";

const Stack = createNativeStackNavigator();

export default class Routes extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login2">
                    <Stack.Screen
                        name="Login2"
                        component={ Login2 }
                        options={{title: 'Tela de Login'}}
                    />
                    <Stack.Screen
                        name="Home"
                        component={ Home }
                        options={{title: 'Tela inicial'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
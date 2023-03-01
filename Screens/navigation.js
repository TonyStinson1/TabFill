// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from "../Screens/redux/store";
//import base64 from 'react-native-base64'

import { NavigationContainer } from "@react-navigation/native";
import RequestLogin from "../Screens/Requestlogin";
import { Text, View, Linking } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scanqrcode from "../Screens/Scanqrcode";
import Login from "../Screens/Login";
import Completation from "../Screens/Completation";
import Declaration from "../Screens/Declaration";
import Profile from "../Screens/Profile";
import Basicinformation from "../Screens/Basicinformation";
import base64 from 'react-native-base64'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const store = configureStore();

const Rootnavigation = () => {

    // const [stateToken, setStateToken] = useState('');

    const linking = {
        prefixes: ["https://fill-easy.com/", 'fill-easy-demo://'],
    };

    const dispatch = useDispatch();

    useEffect(() => {
        Linking.addEventListener('url', (url) => {
            console.log("URL=====>", url);
            if (url.url.includes('fill-easy-demo://') && url.url.includes('eme')) {
                ObtainEmeAnonResults();
            } else if (url.url.includes('fill-easy-demo://') && url.url.includes('sign')) {
                reqSignResults();
            }
        });
    }, []);

    const ObtainEmeAnonResults = async () => {

        const tokenasync = await AsyncStorage.getItem('@token')
        var myHeaders = new Headers();
        myHeaders.append("x-client-id", "cd89d333a7ec42d288421971dfb02d1d");
        myHeaders.append("x-client-secret", "9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673");
        myHeaders.append("Content-Type", "application/json");

        console.log("state ", tokenasync);

        var raw = JSON.stringify({
            "token": tokenasync
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://dev.fill-easy.com/iamsmart/callback/client", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("Form filling profile base 64", result);
                let obj = JSON.parse(result);
                if (obj.status == 200) {
                    console.log("Rightl=fully added");
                    dispatch({
                        type: "SET_PROFILE_TOKEN",
                        payload: obj.formFilling
                    });
                }
            })
            .catch(error => console.log('error', error));
    }

    const reqSignResults = async () => {

        const tokenasync = await AsyncStorage.getItem('@signtoken')
        var myHeaders = new Headers();
        myHeaders.append("x-client-id", "cd89d333a7ec42d288421971dfb02d1d");
        myHeaders.append("x-client-secret", "9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673");
        myHeaders.append("Content-Type", "application/json");

        console.log("state ", tokenasync);

        var raw = JSON.stringify({
            "token": tokenasync
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://dev.fill-easy.com/iamsmart/callback/client", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("Form filling profile base 64", result);
                let obj = JSON.parse(result);
                if (obj.status == 200) {
                    console.log("Rightfully added sign", obj);
                    dispatch({
                        type: "SET_SIGN_TOKEN",
                        payload: obj.sign
                    });
                }
            })
            .catch(error => console.log('error', error));
    }

    return (

        <NavigationContainer linking={linking}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Requestlogin"
            // initialRouteName="Basicinformtion"
            >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="Declaration" component={Declaration} />
                <Stack.Screen name="Completation" component={Completation} />
                <Stack.Screen name="Requestlogin" component={RequestLogin} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Basicinformtion" component={Basicinformation} />
                <Stack.Screen
                    name="Scanqrcode"
                    component={Scanqrcode}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Rootnavigation;



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { useEffect } from "react";
import {Provider} from 'react-redux';
import configureStore from "./Screens/redux/store";

import { NavigationContainer } from "@react-navigation/native";
import RequestLogin from "./Screens/Requestlogin";
import { Text, View , Linking } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scanqrcode from "./Screens/Scanqrcode";
import Login from "./Screens/Login";
import Completation from "./Screens/Completation";
import Declaration from "./Screens/Declaration";
import Profile from "./Screens/Profile";
import Basicinformation from "./Screens/Basicinformation";
import base64 from 'react-native-base64'

const Stack = createNativeStackNavigator();

const store = configureStore();

const App = () => {

const linking = {
  prefixes: ["https://fill-easy.com/", 'fill-easy://'],
};


const clientHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-client-id": 'cd89d333a7ec42d288421971dfb02d1d', //'1-client-id',
  "x-client-secret": '9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673' //'1-client-secret', // optional
  // "wildcard-client-id": "bc6c7e1fd9bb4278"
}

function getStringBetween(str, start, end) {
  const result = str.match(new RegExp(start + "(.*)" + end));

  return result[1];
}

useEffect(() => {
  Linking.addEventListener('url', (url) => {
    linkUrl = url.url;
    console.log('this is the url: ', linkUrl);

    if (linkUrl.includes('code')) {
      let mySubString = getStringBetween(linkUrl, 'code=', '&state')
      console.log("Substring", mySubString);
      ObtainEmeAnonResults(mySubString);
    }
  });
}, []);


const ObtainEmeAnonResults = async (authCode) => {
  const url = `https://dev.fill-easy.com/iamsmart/redirect/user/formfilling-anonymous/${wildcard_client_id}?code=` + authCode + '&source=mobile';
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: clientHeaders,
    })

    const json = await response.text();
    console.log("callback object", json);
    let obj = JSON.parse(json);
    let codedArray = [];
    let docArray = [];
    codedArray = obj.auth.split('.');
    docArray = obj.formFilling.split('.');
    if (codedArray.length > 2) {
      console.log("Decoded 1", base64.decode(codedArray[1]))
      console.log("Decoded 2", base64.decode(docArray[1]))
    }
    if (obj.status == 200) {
      // dispatch({
      //   type: "SET_PROFILE_TOKEN",
      //   payload: codedArray[1],
      // });
      // dispatch({
      //   type: "SET_DOC_TOKEN",
      //   payload: docArray[1],
      // });
      // dispatch({
      //   type: "INACTIVATE_LOADER",
      // });
    } else {
      Alert.alert(
        "Auth TOKEN STATUS",
        "Error Occured",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
  } catch (error) {
    console.error(error);
  } finally {
    // setLoading(false);
  }
}


  return (
    <Provider store={store}>
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
       initialRouteName="Requestlogin"
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
    </Provider>
  );
};

export default App;
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   Dimensions,
//   View,
//   //Dimensions,
//   useWindowDimensions,
//   TouchableOpacity,
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

// const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;
// const App = () => {
//   console.log("^^^^^", width, height, wp(5));

//   // useEffect(() =>{
//   //   const Dimension = useWindowDimensions()

//   //   console.log("%%%%%%",Dimension);
//   // },[])

//   return (
//     <View style={{ flex: 1, backgroundColor: "#1E1019", flexDirection: "row" }}>
//       <View style={{ width: "40%", padding: "5%" }}>
//         <Image
//           source={require("./assets/card.png")}
//           style={{ width: 35, height: 35 }}
//         />

//         <View style={{ flex: 1, justifyContent: "center" }}>
//           <Text
//             style={{ fontSize: 35, fontWeight: "bold", color: "white" }}
//           >
//             Apply For Our Best Loan Services
//           </Text>
//           <View
//             style={{
//               flexDirection: "row",
//               width: "100%",
//               justifyContent: "space-between",
//               marginTop: 20,
//             }}
//           >
//             <TouchableOpacity
//               style={{
//                 width: "45%",
//                 backgroundColor: "#891eff",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 paddingVertical: 15,
//                 borderRadius: 25,
//               }}
//             >
//               <Text
//                 style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
//               >
//                 Apply now
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 width: "45%",
//                 borderWidth: 2,
//                 borderColor: "white",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 paddingVertical: 10,
//                 borderRadius: 25,
//               }}
//             >
//               <Text
//                 style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
//               >
//                 Explor
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             style={{
//               flexDirection: "row",
//               backgroundColor: "#2b7366",
//               borderRadius: 25,
//               marginTop: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 5,
//             }}
//           >
//             <Image source={require("./assets/ismart.png")} />
//             <Text
//               style={{
//                 marginLeft: 5,
//                 fontSize: 19,
//                 color: "white",
//                 fontWeight: "600",
//               }}
//             >
//               Login with iAM Smart
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{position:"absolute",bottom:-100 , left:-100}}>
//           <Image source={require("./assets/blue.png")}
//           style={{width:200,height:200}}/>
//         </View>

//         <View style={{position:"absolute",bottom:-50,left:"100%"}}>
//           <Image source={require("./assets/orrange.png")}
//           style={{width:100,height:100}}/>
//         </View>
//       </View>
//       <View style={{ width: "60%" }}>
//         <Image
//           source={require("./assets/m.png")}
//           style={{ height: hp("100%"), width: "140%" }}
//         />

//         <View style={{ position: "absolute", width: "100%", height: "100%" }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               width: "100%",
//               paddingLeft: "15%",
//               justifyContent: "space-around",
//               marginTop: "10%",
//             }}
//           >
//             <TouchableOpacity>
//             <Text
//               style={{ fontSize: wp("2%"), color: "white", fontWeight: "600" }}
//             >
//               Banking
//             </Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text
//               style={{ fontSize: wp("2%"), color: "white", fontWeight: "600" }}
//             >
//               Creditcard
//             </Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text
//               style={{ fontSize: wp("2%"), color: "white", fontWeight: "600" }}
//             >
//               Loans
//             </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: 35,
//                 padding: 15,
//                 paddingHorizontal: 25,
//               }}
//             >
//               <Text
//                 style={{ fontSize: wp("2%"), color: "blue", fontWeight: "600" }}
//               >
//                 Signup
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ marginTop: "10%", marginLeft: -25 }}>
//             <Image
//               source={require("./assets/pink.png")}
//               style={{ width: wp("15%"), height: wp("15%") }}
//             />
//           </View>

//           <View
//             style={{
//               position: "absolute",
//               marginTop: "35%",
//               alignSelf: "flex-end",
//               marginRight: "10%",
//             }}
//           >
//             <Image
//               source={require("./assets/green.png")}
//               style={{ width: wp("25%"), height: wp("25%") }}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   highlight: {
//     fontWeight: "700",
//   },
// });

// export default App;

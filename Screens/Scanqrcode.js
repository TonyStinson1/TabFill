/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
  View,
  //Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const Scanqrcode = () => {
  const navigation = useNavigation();
 // console.log("^^^^^", width, height, wp(5));

  // useEffect(() =>{
  //   const Dimension = useWindowDimensions()

  //   console.log("%%%%%%",Dimension);
  // },[])

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
     <View
        style={{
          width: "100%",
          height: 75,
          backgroundColor: "#2b7366",
          flexDirection: "row",
          paddingHorizontal: "20%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
         <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Image source={require("../assets/smart.png")} 
                style={{width:40,height:40}}/>
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#FFFFFF" ,fontFamily:"PTSans-Regular"}}>
            iAM Smart
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/world.png")} />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#FFFFFF" , fontFamily:"PTSans-Regular" }}>
            English
          </Text>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Image source={require("../assets/arrow.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: "20%",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#f3f3f3",
              marginTop: 25,
              padding: 10,
              width: 280,
              // paddingHorizontal: 35,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={()=>navigation.navigate("Requestlogin")}
          >
            <Image
              source={require("../assets/left.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ fontSize: 20, marginLeft: 5, color: "#B2B2B2" }}>
              Back to online service
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 25,
              fontSize: 30,
              fontFamily:"PTSans-Bold",
              marginTop: 40,
              color: "#3a3a3a",
            }}
          >
            Log in with iAM Smart :{" "}
          </Text>
          <Text
            style={{
              marginLeft: 25,
              fontSize: 22,
              fontWeight: "500",
              marginTop: 20,
              color: "#959595",
            }}
          >
            1. Please open iAM Smart App in your mobile
          </Text>

          <Text
            style={{
              marginLeft: 25,
              fontSize: 22,
              fontWeight: "500",
              marginTop: 20,
              color: "#959595",
            }}
          >
            2. Tap the scan button in iAM Smart App
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#2b7366",
              width: 350,
              marginLeft:25,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent:"center",
              paddingVertical:15,
              borderRadius:25
            }}
          >
            <Image
              source={require("../assets/scan.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{fontSize:25,color:"white",marginLeft:10}}>Scan QR Code</Text>
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 25,
              fontSize: 22,
              fontWeight: "500",
              marginTop: 25,
              color: "#959595",
            }}
          >
            3. Scan the QR Code
          </Text>
        </View>

        <View style={{width:250,height:250,marginTop:"20%"}}>
            <Image source={require("../assets/qrcode.png")}
            style={{resizeMode:"center",height:"100%",width:"100%"}}/>
        </View>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Scanqrcode;

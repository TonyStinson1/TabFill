/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const Login = () => {

  const navigation = useNavigation();

  const authToken = useSelector((state) => state.userInfo.authToken);

  const requestEme = async () => {

    var myHeaders = new Headers();
    myHeaders.append("x-client-id", "cd89d333a7ec42d288421971dfb02d1d");
    myHeaders.append("x-client-secret", "9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "token": `${authToken}`,
      "source": "PC_Browser",
      "profileFields": [
        "idNo",
        "enName",
        "chName",
        "birthDate",
        "gender"
      ],
      "formData": {
        "formName": "Standard Chartered Credit Card Application Form",
        "formDesc": "Application for Credit Card",
        "formNum": "SC_001",
        "formFields": [
          "prefix",
          "maritalStatus",
          "homeTelNumber",
          "officeTelNumber",
          "mobileNumber",
          "emailAddress",
          "residentialAddress",
          "postalAddress",
          "educationLevel",
          "addressDocInfo"
        ]
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://dev.fill-easy.com/iamsmart/request/eme", requestOptions)
      .then(response => response.text())
      .then(result => {
        const res = JSON.parse(result)
        console.log("Response for Profile norm api", res);
        // console.log("Token data", token);
        const token = res?.token;
        // setLoader(true);
        // redirectToIams(url);
        if(res.status) {
          navigation.navigate('Profile', { token: token })
        }
      })
      .catch(error => console.log('error', error));
  }


  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <LinearGradient
        colors={["#231220", "#100808"]}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <View style={{ width: "40%", padding: "5%" }}>
            <Image
              source={require("../assets/card.png")}
              style={{ width: 35, height: 35 }}
            />

            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{ fontSize: 58, fontFamily: "PTSans-Bold", color: "white" }}
              >
                Login Completed!
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: "#8900FF",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 15,
                    borderRadius: 33,
                  }}
                  onPress={() => requestEme()}
                >
                  <Text
                    style={{ fontSize: 24, fontFamily: "PTSans-Bold", color: "white" }}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "45%",
                    borderWidth: 2,
                    borderColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                    borderRadius: 33,
                  }}
                >
                  <Text
                    style={{ fontSize: 24, fontFamily: "PTSans-Bold", color: "white" }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ position: "absolute", bottom: -150, left: -120 }}>
                <Image
                  source={require("../assets/blue.png")}
                  style={{ width: 200, height: 200 }}
                />
              </View>

              <View style={{ position: "absolute", bottom: -100, left: "100%" }}>
                <Image
                  source={require("../assets/orrange.png")}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
          </View>
          <View style={{ width: "60%" }}>
            <Image
              source={require("../assets/m.png")}
              style={{ height: hp("100%"), width: "140%" }}
            />

            <View
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "15%",
                  justifyContent: "space-evenly",
                  marginTop: "10%",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#FFFFFF",
                      fontFamily: "PTSans-Bold"
                    }}
                  >
                    Banking
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#FFFFFF",
                      fontFamily: "PTSans-Bold"
                    }}
                  >
                    Creditcard
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#FFFFFF",
                      fontFamily: "PTSans-Bold"
                    }}
                  >
                    Loans
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#FFFFFF",
                      fontFamily: "PTSans-Bold"
                    }}
                  >
                    Profile
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require("../assets/user.png")}
                    style={{ width: 41, height: 41 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: "15%", alignSelf: "center" }}>
                <Image
                  source={require("../assets/success.png")}
                  style={{ width: 544, height: 408 }}
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* <View style={{ width: "60%" }}>
        <Image
          source={require("../assets/m.png")}
          style={{ height: hp("100%"), width: "140%" }}
        />

        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              paddingLeft: "15%",
              justifyContent: "space-evenly",
              marginTop: "10%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Banking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Creditcard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Loans
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../assets/user.png")}
                style={{ width: 41, height: 41 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: "15%", alignSelf: "center" }}>
            <Image
              source={require("../assets/success.png")}
              style={{ width: 544, height: 408 }}
            />
          </View>
        </View>
      </View> */}
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

export default Login;

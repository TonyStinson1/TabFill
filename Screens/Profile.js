import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Formtheme from "./componat/formtheme";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [cname, setCname] = useState("");
  const [ename, setEname] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [education, setEducation] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [maritial, setMaritial] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [billadd, setBilladd] = useState("");

  const data = useSelector(state => state);

  const dispatch = useDispatch();

  const profileToken = useSelector((state) => state.userInfo.profileToken);
  const navigation = useNavigation();

  useEffect(() => {
    if(profileToken && profileToken.length > 0) {
      navigation.navigate('Basicinformtion');
    }
  }, [profileToken]);

  function redirectToIams(url) {
    Linking.openURL(url);
  }

  const requestEmeAnon = async () => {

    var myHeaders = new Headers();
    myHeaders.append("x-client-id", "cd89d333a7ec42d288421971dfb02d1d");
    myHeaders.append("x-client-secret", "9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "scope": "eidapi_auth eidapi_formFilling",
      "lang": "en-US",
      "source": "PC_Browser",
      "redirect": "fill-easy-demo://eme/",
      "profileFields": [
        "idNo",
        "enName",
        "chName",
        "birthDate",
        "gender"
      ],
      "formData": {
        "formName": "Standard Chartered Credit Card Application Form",
        "formNum": "SC_001",
        "formDesc": "Application for Credit Card",
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
          "addressDocInfo",
          "addressDocFile"
        ]
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://dev.fill-easy.com/iamsmart/request/eme-anonymous", requestOptions)
      .then(response => response.text())
      .then(result =>{
        const res =   JSON.parse(result)
        const token = res?.token
        const url = res?.url;
        console.log("Response for 1st api", res);
        dispatch({
          type : "SET_AUTH_TOKEN",
          payload : token
        })
        console.log("Token data", token);
        AsyncStorage.setItem("@token" , token);


        redirectToIams(url);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Formtheme text={"User Profile"}
        handlenav={requestEmeAnon}
        bottomtext={"Personal data with iAM Smart"}>
        <View style={{ flex: 1, zIndex: -999, paddingHorizontal: 50, marginTop: -50 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row" }}>
                {/* Chinese name */}
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Chinese name* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={cname}
                      onChangeText={(text) => setCname(text)}
                      style={styles.inputtext}
                    />
                  </View>
                </View>
                {/* English name */}
                <View style={{ marginLeft: 20 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>English name* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={ename}
                      onChangeText={(text) => setEname(text)}
                      style={styles.inputtext}
                    />
                  </View>
                </View>
              </View>
              {/* Gender  */}

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Text style={styles.title}>Gender* : </Text>
                <Image
                  source={require("../assets/smart.png")}
                  style={styles.smartimage}
                />
                <TouchableOpacity>
                  <Text style={styles.title}> F</Text>
                </TouchableOpacity>
                <Text style={styles.title}> /</Text>
                <TouchableOpacity>
                  <Text style={styles.title}> M </Text>
                </TouchableOpacity>
                <Text style={styles.title}> /</Text>
                <TouchableOpacity>
                  <Text style={styles.title}> X </Text>
                </TouchableOpacity>
              </View>

              {/* Card numebr and education  */}
              <View style={{ flexDirection: "row", marginTop: 15, }}>
                {/*Card number */}
                <View style={{ width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>
                      Hong Kong Identity Card number* :
                    </Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={cardnumber}
                      onChangeText={(text) => setCardnumber(text)}
                      style={{ ...styles.inputtext }}
                    />
                  </View>
                </View>
                {/* Education level */}
                <View style={{ marginLeft: 25, width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Education level* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={{ ...styles.inputView }}>
                    <TextInput
                      placeholder=""
                      value={education}
                      onChangeText={(text) => setEducation(text)}
                      style={{ ...styles.inputtext }}
                    />
                  </View>
                </View>
              </View>

              {/* DOB and status */}

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* DOB */}
                <View style={{ width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Date of birth* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={birthdate}
                      onChangeText={(text) => setBirthdate(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
                {/*  Marital status */}
                <View style={{ marginLeft: 25, width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Marital status* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={maritial}
                      onChangeText={(text) => setMaritial(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>
              {/* Email and address */}
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* Email */}
                <View style={{ width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Email* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
                {/* Residential address */}
                <View style={{ marginLeft: 25, width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Residential address* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={address}
                      onChangeText={(text) => setAddress(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row", marginTop: 15, marginBottom: 160 }}>
                {/* Number */}
                <View style={{ width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>
                      Mobile phone number*  :
                    </Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={number}
                      onChangeText={(text) => setNumber(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
                {/* Billing address */}
                <View style={{ marginLeft: 25, width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Billing address* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={billadd}
                      onChangeText={(text) => setBilladd(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>

            </View>
          </ScrollView>
        </View>
      </Formtheme>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "PTSans-Bold",
    color: "#424242",
  },
  smartimage: { width: 18, height: 23, marginLeft: 5 },
  inputView: {
    height: 54,
    borderWidth: 1,
    borderColor: "#707070",
    marginTop: 20,
  },
  inputtext: { color: "black", fontSize: 20, marginLeft: 15 },
});

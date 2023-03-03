import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Formtheme from "./Component/formtheme";
import Slider from "react-native-slider";
import { useDispatch, useSelector } from "react-redux";
//import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Basicinformation = ({ route }) => {

  const [value, setValue] = useState(96000);
  const { token } = route.params;
  const [minval, setMinval] = useState(96000);
  const [maxval, setMaxval] = useState(1100000);
  const [loader, setLoader] = useState(false);

  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();
  const [val4, setval4] = useState();

  useEffect(() => {
    const thirdval = maxval - minval;
    const t = thirdval / 2;
    setVal3(t);

    const secondval = t - minval;
    const s = secondval / 2;
    setVal2(s);

    const a = t - s;
    const f = t + a;
    const fourthval = maxval - t;
    // const f = fourthval /2
    setval4(f);
  }, [minval]);

  const profileToken = useSelector((state) => state.userInfo.profileToken);
  const normProfileToken = useSelector((state) => state.userInfo.normProfileToken);
  const [decodedData, setDecodedData] = useState({});
  const [loader1, setLoader1] = useState(true);
  const navigation = useNavigation();

  function getStringBetween(str, start, end) {
    const result = str.match(new RegExp(start + "(.*)" + end));

    return result[1];
  }

  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (normProfileToken.length == 0) {
      interval = setInterval(reqFromDetails, 1000);
    } else {
      let data = atob1(normProfileToken);
      let prof, prof1;
      if (data.length > 0) {
        console.log("String data1", stringData);
        let stringData = data.slice(0, -31);
        console.log("String data2", stringData);
        console.log("String data last character", stringData[stringData.length - 1]);
        prof = getStringBetween(stringData, '"HS256"}', "}}}}}}");
        // console.log("Data from stirng between", prof);
        prof = prof + "}}}}}}"
        prof1 = JSON.parse(prof);
        console.log("Decoded prof data", JSON.stringify(prof1));
        setDecodedData(prof1.Eme);
      }
    }
    return () => {
      clearInterval(interval);
    }
  }, [normProfileToken]);

  useEffect(() => {
    if (profileToken && profileToken.length > 0) {
      let data = atob1(profileToken);
      console.log("Profile Data ", data);
      let prof, prof1;
      if (data.length > 0) {
        let stringData = data.slice(0, -31);
        prof = getStringBetween(stringData, '"HS256"}', "");
        console.log("Data from stirng between", prof);
        prof = prof.slice(0, -1);
        prof1 = JSON.parse(prof);
        console.log("Decoded prof data", JSON.stringify(prof1));
      }
      setDecodedData(prof1.formFilling);
    }
  }, [])

  const reqFromDetails = async () => {

    var myHeaders = new Headers();
    myHeaders.append("x-client-id", "cd89d333a7ec42d288421971dfb02d1d");
    myHeaders.append("x-client-secret", "9b7a597d7a574d439566b259c5d67281a9829404e9024b20b1f42d5e99bb0673");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "token": token
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
        let obj = JSON.parse(result);
        if (obj.status == 200) {
          console.log("I got the prfile ", obj);
          console.log("Object norm", obj.token);

          setLoader(false);
          dispatch({
            type: "SET_NPROFILE_TOKEN",
            payload: obj.token
          });
          return true;
        }
        setLoader(true);
        return false;
      })
      .catch(error => console.log('error', error));
  }

  const birthDayConverter = (dateString) => {
    let year = dateString.substring(0, 4);
    let month = dateString.substring(4, 6);
    let day = dateString.substring(6, 8);

    let date = new Date(year, month - 1, day);
    console.log("Date length", date.toDateString());
    return date.toDateString();
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const atob1 = (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
      buffer = str.charAt(i++);

      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  }

  const residentialFormat = (home) => {
    let reformat = `${home.EngPremisesAddress.Eng3dAddress.EngUnit.UnitNo}, ${home.EngPremisesAddress.BuildingName}, ${home.EngPremisesAddress.EngDistrict.DcDistrict}, ${home.EngPremisesAddress.Region}`
    return reformat;
  }

  const { enName, idNo, gender, educationLevel,
    residentialAddress, birthDate, emailAddress,
    maritalStatus, mobileNumber, postalAddress } = decodedData;

  const navToDeclare = () => {
    if(normProfileToken.length == 0) {
      navigation.navigate('Declaration');
    } else {
      navigation.navigate('Declaration', { token1: token });
    }
  }


  if (loader) {
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Formtheme text={"Basic Informations"}
        bottomtext={"Next"} handlenav={navToDeclare} >
        <View style={{ flex: 1, paddingHorizontal: 50, marginTop: -50 }}>
          <ScrollView style={{ flex: 1, marginBottom: 160 }}>
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
                      value={''}
                      editable={false}
                      // onChangeText={(text) => setCname(text)}
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
                      value={enName?.UnstructuredName && enName?.UnstructuredName.length > 0 ? enName?.UnstructuredName : ''}
                      editable={false}
                      // onChangeText={(text) => setEname(text)}
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
                  <Text style={gender == 'F' ? { ...styles.title, ...styles.selected, } : { ...styles.title }}> F</Text>
                </TouchableOpacity>
                <Text style={styles.title}> /</Text>
                <TouchableOpacity>
                  <Text style={gender == 'M' ? { ...styles.title, ...styles.selected, } : { ...styles.title }}> M </Text>
                </TouchableOpacity>
                <Text style={styles.title}> /</Text>
                <TouchableOpacity>
                  <Text style={gender == 'X' ? { ...styles.title, ...styles.selected, } : { ...styles.title }}> X </Text>
                </TouchableOpacity>
              </View>

              {/* Card numebr and education  */}
              <View style={{ flexDirection: "row", marginTop: 15 }}>
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
                      value={idNo?.Identification && idNo?.Identification.length > 0 ? `${idNo?.Identification}-(${idNo?.CheckDigit})` : ''}
                      editable={false}
                      // onChangeText={(text) => setCardnumber(text)}
                      style={{ ...styles.inputtext, width: 350 }}
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
                      editable={false}
                      value={educationLevel && educationLevel.length > 0 ? educationLevel : ''}
                      // onChangeText={(text) => setEducation(text)}
                      style={{ ...styles.inputtext, width: 350 }}
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
                      value={birthDate && birthDate.length > 0 ? birthDayConverter(birthDate) : ''}
                      editable={false}
                      // onChangeText={(text) => setBirthdate(text)}
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
                      value={maritalStatus && maritalStatus.length > 0 ? maritalStatus : ''}
                      editable={false}
                      // onChangeText={(text) => setMaritial(text)}
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
                      value={emailAddress && emailAddress.length > 0 ? emailAddress : ''}
                      editable={false}
                      // onChangeText={(text) => setEmail(text)}
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
                      value={residentialAddress?.EngPremisesAddress?.BuildingName && residentialAddress.EngPremisesAddress.BuildingName.length > 0 ? residentialFormat(residentialAddress) : ''}
                      editable={false}
                      // onChangeText={(text) => setAddress(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* Number */}
                <View style={{ width: "40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Mobile phone number* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      editable={false}
                      value={mobileNumber && mobileNumber.SubscriberNumber.length > 0 ? `${mobileNumber.CountryCode} - ${mobileNumber.SubscriberNumber}` : ''}
                      // onChangeText={(text) => setNumber(text)}
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
                      editable={false}
                      value={postalAddress?.EngPremisesAddress?.BuildingName && postalAddress.EngPremisesAddress.BuildingName.length > 0 ? residentialFormat(postalAddress) : ''}
                      // onChangeText={(text) => setEducation(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>

              <Text
                style={{
                  fontSize: 58,
                  fontWeight: "bold",
                  marginTop: 25,
                  color: "#000000",
                }}
              >
                More about you...
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#424242",
                  marginTop: 10,
                }}
              >
                Annual Income(minimum requirement is HK$96,000)* :{" "}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  paddingBottom: 50,
                  borderBottomWidth: 0.5,
                  borderColor: "gray",
                  alignItems: "center",
                }}
              >

                <View style={{ width: "70%" }}>
                  <Slider
                    value={value}
                    // thumbTouchSize={{ width: 50, height: 50 }}
                    step={4}
                    thumbStyle={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      backgroundColor: "white",
                      borderWidth: 0.5,
                      borderColor: "gray",
                    }}
                    thumbTintColor="pink"
                    maximumValue={1100000}
                    minimumValue={90000}
                    style={{ width: "100%" }}
                    trackStyle={{
                      backgroundColor: "white",
                      borderWidth: 0.5,
                      height: 3,
                      borderRadius: 5,
                      borderColor: "gray",
                    }}
                    onValueChange={(v) => {
                      console.log("Value", v), setValue(v);
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Image source={require("../assets/down.png")} />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        HK$ {minval}
                      </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Image source={require("../assets/down.png")} />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {val2}
                      </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Image source={require("../assets/down.png")} />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {val3}
                      </Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Image source={require("../assets/down.png")} />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {val4}
                      </Text>
                    </View>
                    {/* <Text style={{ fontSize: 25 }}>{val2}</Text> */}
                    {/* <Text style={{ fontSize: 25 }}>{val3}</Text> */}
                    {/* <Text style={{ fontSize: 25 }}>{val4}</Text> */}
                    <Text style={{ fontSize: 25 }}>more</Text>
                  </View>
                </View>

                <View
                  style={{
                    width: "25%",
                    marginLeft: "2%",
                    paddingVertical: 10,
                    justifyContent: "center",
                    borderWidth: 0.5,
                    borderColor: "gray",
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#67A4E4" }}>
                    {" "}
                    HK$ <Text style={{ fontSize: 40 }}>{value.toFixed(2)}</Text>
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 25,
                  borderTopWidth: 0.5,
                  borderColor: "gray",
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "black",
                    fontWeight: "bold",
                    marginTop: 15,
                  }}
                >
                  *Note:
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                  (a) Only application to client who does not hold any deposit
                  account, including Saving Account(s). Current Cheque
                  Account(s). Integrated Deposits Account(s) and Time Deposit
                  Account(s), with the Bank in the past 12 months from the date
                  of Online Application submission.
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                  (b) Client needs to bring along all the required documents and
                  visit any branch nearby to complete the account opening
                  process within 14 days upon application submission.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Formtheme>
    </View>
  );
};

export default Basicinformation;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#424242",
  },
  selected: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  smartimage: { width: 18, height: 23, marginLeft: 5 },
  inputView: {
    height: 54,
    borderWidth: 1,
    borderColor: "#707070",
    marginTop: 20,
  },
  inputtext: { color: "black", fontSize: 18, marginLeft: 25 },
});

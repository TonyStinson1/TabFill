import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Formtheme from "./componat/formtheme";
import Slider from "react-native-slider";
//import Slider from "@react-native-community/slider";

const Basicinformation = () => {
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

  const [value, setValue] = useState(96000);

  const [minval, setMinval] = useState(96000);
  const [maxval, setMaxval] = useState(1100000);

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

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Formtheme text={"Basic Informations"}
      bottomtext={"Submit with iAM Smart"}>
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
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/*Card number */}
                <View style={{width:"40%"}}>
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
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
                {/* Education level */}
                <View style={{ marginLeft: 25,width:"40%" }}>
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
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
              </View>

              {/* DOB and status */}

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* DOB */}
                <View style={{width:"40%"}}>
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
                <View style={{ marginLeft: 25 ,width:"40%"}}>
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
                <View style={{width:"40%"}}>
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
                <View style={{ marginLeft: 25 ,width:"40%"}}>
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

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* Number */}
                <View style={{width:"40%"}}>
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
                      value={number}
                      onChangeText={(text) => setNumber(text)}
                      style={{ ...styles.inputtext, width: 350 }}
                    />
                  </View>
                </View>
                {/* Billing address */}
                <View style={{ marginLeft: 25,width:"40%" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Education level* :</Text>
                    <Image
                      source={require("../assets/smart.png")}
                      style={styles.smartimage}
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder=""
                      value={education}
                      onChangeText={(text) => setEducation(text)}
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
  smartimage: { width: 18, height: 23, marginLeft: 5 },
  inputView: {
    height: 54,
    borderWidth: 1,
    borderColor: "#707070",
    marginTop: 20,
  },
  inputtext: { color: "black", fontSize: 18,marginLeft:25 },
});

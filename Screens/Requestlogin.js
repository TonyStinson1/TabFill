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
import { Colors } from "react-native/Libraries/NewAppScreen";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const RequestLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/login.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          flex: 1,
          width: "100%",
          height: "100%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "40%",
            padding: 75,
            paddingRight: 10,
            height: "100%",
          }}
        >
          <Image
            source={require("../assets/card.png")}
            style={{ width: 35, height: 32 }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 58,
                fontFamily: "PTSans-Bold",
                color: "#FFFFFF",
              }}
            >
              Apply For Our Best Loan Services
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
                  height: 68,

                  backgroundColor: "#8900FF",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 33,
                }}
                onPress={() => navigation.navigate("Profile")}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "PTSans-Bold",
                    color: "#FFFFFF",
                  }}
                >
                  Apply now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "45%",
                  borderWidth: 4,
                  height: 68,
                  borderColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 10,
                  borderRadius: 33,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "PTSans-Bold",
                    color: "#FFFFFF",
                  }}
                >
                  Explore
                </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
              style={{
                flexDirection: "row",
                height: 65,
                backgroundColor: "#2B7366",
                borderRadius: 33,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
              onPress={() => navigation.navigate("Scanqrcode")}
            >
              <Image source={require("../assets/ismart.png")} />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 24,
                  fontFamily: "PTSans-Bold",
                  color: "#FFFFFF",
                }}
              >
                Login with iAM Smart
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={{ width: "60%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              // paddingLeft: "25%",

              justifyContent: "flex-end",
              marginTop: "8%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  fontFamily: "PTSans-Bold",
                  // fontWeight: "600",
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
                  fontFamily: "PTSans-Bold",
                  marginLeft: 35,
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
                  fontFamily: "PTSans-Bold",
                  marginLeft: 35,
                }}
              >
                Loans
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 33,
                height: 65,
                width: 164,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 35,
                marginRight: 35,
              }}
            >
              <Text
                style={{ fontSize: 24,fontFamily:"PTSans-Bold", color: "#6E84DB"}}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // <View style={{ flex: 1, flexDirection: "row" }}>
    //   <LinearGradient
    //     colors={["#231220", "#100808"]}
    //     start={{ x: 0.0, y: 0.25 }}
    //     end={{ x: 0.5, y: 1.0 }}
    //     locations={[0, 0.4]}
    //     style={{ flex: 1 }}
    //   >
    //      <View style={{ flex: 1, width: "100%", height: "100%",flexDirection:"row" }}>
    //   <View style={{ width: "40%",paddingLeft:72,paddingRight:15 }}>
    //     <Image
    //       source={require("../assets/card.png")}
    //       style={{ width: 35, height: 32 }}
    //     />

    //     <View style={{ flex: 1, justifyContent: "center" }}>
    //       <Text style={{ fontSize: 58, fontFamily:"PTSans-Bold",color:"#FFFFFF" }}>
    //         Apply For Our Best Loan Services
    //       </Text>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           width: "100%",
    //           justifyContent: "space-between",
    //           marginTop: 20,
    //         }}
    //       >
    //         <TouchableOpacity
    //           style={{
    //             width: "45%",
    //             height:68,

    //             backgroundColor: "#8900FF",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             borderRadius: 33,
    //           }}
    //           onPress={()=>navigation.navigate("login")}
    //         >
    //           <Text
    //             style={{ fontSize: 24, fontFamily:"PTSans-Bold", color: "#FFFFFF" }}
    //           >
    //             Apply now
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={{
    //             width: "45%",
    //             borderWidth: 4,
    //             height:68,
    //             borderColor: "white",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             paddingVertical: 10,
    //             borderRadius: 33,
    //           }}
    //         >
    //           <Text
    //             style={{ fontSize: 24, fontFamily:"PTSans-Bold", color: "#FFFFFF" }}
    //           >
    //             Explor
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //       <TouchableOpacity
    //         style={{
    //           flexDirection: "row",
    //           height:65,
    //           backgroundColor: "#2B7366",
    //           borderRadius: 33,
    //           marginTop: 20,
    //           justifyContent: "center",
    //           alignItems: "center",
    //           padding: 5,
    //         }}
    //         onPress={() => navigation.navigate("Scanqrcode")}
    //       >
    //         <Image source={require("../assets/ismart.png")} />
    //         <Text
    //           style={{
    //             marginLeft: 10,
    //             fontSize: 24, fontFamily:"PTSans-Bold", color: "#FFFFFF"
    //           }}
    //         >
    //           Login with iAM Smart
    //         </Text>
    //       </TouchableOpacity>
    //     </View>

    //     <View style={{ position: "absolute", bottom: -100, left: -100 }}>
    //       <Image
    //         source={require("../assets/blue.png")}
    //         style={{ width: 200, height: 200 }}
    //       />
    //     </View>

    //     <View style={{ position: "absolute", bottom: -50, left: "100%" }}>
    //       <Image
    //         source={require("../assets/orrange.png")}
    //         style={{ width: 100, height: 100 }}
    //       />
    //     </View>
    //   </View>
    //   <View style={{ width: "60%" }}>
    //     <Image
    //       source={require("../assets/m.png")}
    //       style={{ height: hp("100%"), width: "140%" }}
    //     />

    //     <View style={{ position: "absolute", width: "100%", height: "100%" }}>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           alignItems: "center",
    //           width: "100%",
    //           paddingLeft: "25%",
    //           justifyContent: "space-around",
    //           marginTop: "10%",
    //         }}
    //       >
    //         <TouchableOpacity>
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               color: "#FFFFFF",
    //               fontFamily:"PTSans-Bold"
    //              // fontWeight: "600",
    //             }}
    //           >
    //             Banking
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               color: "#FFFFFF",
    //               fontFamily:"PTSans-Bold"
    //             }}
    //           >
    //             Creditcard
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               color: "#FFFFFF",
    //               fontFamily:"PTSans-Bold"
    //             }}
    //           >
    //             Loans
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={{
    //             backgroundColor: "white",
    //             borderRadius: 33,
    //             height:65,
    //             width:164,
    //             alignItems:"center",
    //             justifyContent:"center"
    //           }}
    //         >
    //           <Text
    //             style={{ fontSize: wp("2%"), color: "blue", fontWeight: "600" }}
    //           >
    //             Signup
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //       <View style={{ marginTop: "10%", marginLeft: -25 }}>
    //         <Image
    //           source={require("../assets/pink.png")}
    //           style={{ width: wp("15%"), height: wp("15%") }}
    //         />
    //       </View>

    //       <View
    //         style={{
    //           position: "absolute",
    //           marginTop: "35%",
    //           alignSelf: "flex-end",
    //           marginRight: "10%",
    //         }}
    //       >
    //         <Image
    //           source={require("../assets/green.png")}
    //           style={{ width: wp("25%"), height: wp("25%") }}
    //         />
    //       </View>

    //       {/* <View
    //         style={{
    //           width: 479,
    //           height: 287,
    //           borderRadius: 24,
    //           position: "absolute",
    //           marginTop: "50%",
    //           marginLeft: "20%",
    //           transform: [
    //             // { rotateY: "0deg" },
    //             // { rotateZ: "5deg" },
    //             // { rotateX: "40deg" },
    //             { rotateY: "-30deg" },
    //             { rotateZ: "5deg" },
    //             { rotateX: "40deg" },
    //           ],
    //           backgroundColor: "rgba(255, 255, 255, 0.4)",
    //           padding: 25,
    //         }}
    //       >
    //         <View
    //           style={{
    //             width: 51,
    //             height: 45,
    //             backgroundColor: "white",
    //             borderRadius: 8,
    //           }}
    //         ></View>

    //         <Text
    //           style={{
    //             fontSize: 41,
    //             marginTop: "15%",
    //             alignSelf: "center",
    //             color: "white",
    //             fontWeight: "600",
    //           }}
    //         >
    //           4323 3434 0934 3430
    //         </Text>
    //         <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
    //           <View>
    //             <Text
    //               style={{ fontSize: 19, color: "white", fontWeight: "300" }}
    //             >
    //               VALID
    //             </Text>
    //             <Text
    //               style={{ fontSize: 19, color: "white", fontWeight: "300" }}
    //             >
    //               THRU
    //             </Text>
    //           </View>
    //           <Text style={{ fontSize: 37, color: "white", fontWeight: "600" }}>
    //             12/27
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             position: "absolute",
    //             justifyContent: "space-between",
    //             width: "100%",
    //             alignSelf: "center",
    //             bottom: 25,
    //             flexDirection: "row",
    //           }}
    //         >
    //           <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
    //             BANK LOAN
    //           </Text>
    //           <Text
    //             style={{ fontSize: 35, color: "#1a1e71", fontWeight: "bold" }}
    //           >
    //             VISA
    //           </Text>
    //         </View>
    //       </View> */}

    //       {/* <View
    //         style={{
    //           width: 479,
    //           height: 287,
    //           borderRadius: 24,
    //           position: "absolute",
    //           marginTop: "40%",
    //           marginLeft: "10%",
    //           transform: [
    //             // { rotateY: "0deg" },
    //             // { rotateZ: "5deg" },
    //             // { rotateX: "40deg" },
    //             { rotateY: "-15deg" },
    //             { rotateZ: "5deg" },
    //             { rotateX: "40deg" },
    //           ],
    //           backgroundColor: "rgba(255, 255, 255, 0.5)",
    //           padding: 25,
    //         }}
    //       >
    //         <View
    //           style={{
    //             width: 51,
    //             height: 45,
    //             backgroundColor: "white",
    //             borderRadius: 8,
    //           }}
    //         ></View>

    //         <Text
    //           style={{
    //             fontSize: 41,
    //             marginTop: "15%",
    //             alignSelf: "center",
    //             color: "white",
    //             fontWeight: "600",
    //           }}
    //         >
    //           4323 3434 0934 3430
    //         </Text>
    //         <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
    //           <View>
    //             <Text
    //               style={{ fontSize: 19, color: "white", fontWeight: "300" }}
    //             >
    //               VALID
    //             </Text>
    //             <Text
    //               style={{ fontSize: 19, color: "white", fontWeight: "300" }}
    //             >
    //               THRU
    //             </Text>
    //           </View>
    //           <Text style={{ fontSize: 37, color: "white", fontWeight: "600" }}>
    //             12/27
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             position: "absolute",
    //             justifyContent: "space-between",
    //             width: "100%",
    //             alignSelf: "center",
    //             bottom: 25,
    //             flexDirection: "row",
    //           }}
    //         >
    //           <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
    //             BANK LOAN
    //           </Text>
    //           <Text
    //             style={{ fontSize: 35, color: "#1a1e71", fontWeight: "bold" }}
    //           >
    //             VISA
    //           </Text>
    //         </View>
    //       </View> */}
    //     </View>
    //   </View>
    //   </View>
    //   </LinearGradient>
    // </View>
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

export default RequestLogin;

import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Formtheme from "./componat/formtheme";

const Declaration = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
    <Formtheme text={"Declaration"}
                bottomtext={"Sign with iAM Smart"}>
  
       <View style={{ paddingHorizontal: 50 }}>
         {/* <Text>Please click the<TouchableOpacity><Text>Personal Loan Application Declaration</Text></TouchableOpacity></Text> */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            alignContent: "center",

            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ fontSize: 18, color: "black" }}>Please click the</Text>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "blue" }}>
              {" "}
              Personal Loan Application Declaration
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: "black" }}>
            {" "}
            before application submission. You may refer{" "}
          </Text>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "blue" }}> here</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: "black" }}>
            {" "}
            to the related terms and conditions you that have agreed to at the
            beginning of the application proess.
          </Text>
        </View>

        <Text
          style={{
            marginTop: 15,
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
          }}
        >
          Responsible Lending Reminder :{" "}
          <Text style={{ fontSize: 18, fontWeight: "normal" }}>
            To borrow or not borrow? Borrow only if you can repay!
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
          }}
        >
          Smart tips :{" "}
          <Text style={{ fontSize: 18, fontWeight: "normal" }}>
            You may access the repayment ability first to avoid any
            over-borrowing and have a clear understanding of your financial
            condition, daily expenses, actual borrowing needs, Also please repay
            the load on time to avoid late payment charges and additional
            overdue interest.
          </Text>
        </Text>

        <View
          style={{
            width: "100%",
            backgroundColor: "#fcf1f1",
            marginTop: 15,
            padding: 15,
          }}
        >
          <Text style={{ color: "red", fontSize: 13,marginLeft:38 }}>
            Please tick the box after click and read the Personal Loan
            Application Declaration
          </Text>
          <View style={{ flexDirection: "row", marginTop: 15 ,alignItems:"center"}}>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "gray",
              }}
            ></TouchableOpacity>

            <Text style={{fontSize:20,color:"black",marginLeft:15}}>I confirm that I have read and agreed to be bound by the above declaration, terms and confirm my understanding to the responsible lending reminder and summary page details before submitting my application.</Text>
        </View> 
        </View>
      </View>
    </Formtheme>
  </View>
    // <View style={{ flex: 1, width: "100%", height: "100%" }}>
    //   <View style={{ flexDirection: "row", width: "100%" }}>
    //     <View
    //       style={{
    //         width: "40%",
    //         // alignItems: "center",
    //         justifyContent: "center",
    //         paddingLeft: 50,
    //       }}
    //     >
    //       <Text style={{ fontSize: 58, fontWeight: "bold", color: "#000000" }}>
    //         Declaration
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: "flex-end",

    //         marginRight: 0,
    //       }}
    //     >
    //       <Image
    //         source={require("../assets/m2.png")}
    //         style={{
    //           width: 1150,
    //           height: 995,
    //           marginTop: -700,
    //           right: -300,
    //           resizeMode: "stretch",
    //           transform: [{ rotate: "25deg" }],
    //         }}
    //       />

    //       <View
    //         style={{
    //           position: "absolute",
    //           justifyContent: "space-evenly",
    //           alignItems: "center",
    //           width: "80%",
    //           marginTop: 50,
    //           flexDirection: "row",
    //         }}
    //       >
    //         <TouchableOpacity>
    //           <Text
    //             style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
    //           >
    //             Banking
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
    //           >
    //             Credit Card
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
    //           >
    //             Loans
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Text
    //             style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
    //           >
    //             Profile
    //           </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <Image
    //             source={require("../assets/user.png")}
    //             style={{ width: 41, height: 41 }}
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>

    //   <View style={{ paddingHorizontal: 50 }}>
    //     {/* <Text>Please click the<TouchableOpacity><Text>Personal Loan Application Declaration</Text></TouchableOpacity></Text> */}
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         width: "100%",
    //         flexWrap: "wrap",
    //         alignContent: "center",

    //         alignItems: "center",
    //         marginTop: 25,
    //       }}
    //     >
    //       <Text style={{ fontSize: 18, color: "black" }}>Please click the</Text>
    //       <TouchableOpacity style={{ alignItems: "center" }}>
    //         <Text style={{ fontSize: 18, color: "blue" }}>
    //           {" "}
    //           Personal Loan Application Declaration
    //         </Text>
    //       </TouchableOpacity>
    //       <Text style={{ fontSize: 18, color: "black" }}>
    //         {" "}
    //         before application submission. You may refer{" "}
    //       </Text>
    //       <TouchableOpacity style={{ alignItems: "center" }}>
    //         <Text style={{ fontSize: 18, color: "blue" }}> here</Text>
    //       </TouchableOpacity>
    //       <Text style={{ fontSize: 18, color: "black" }}>
    //         {" "}
    //         to the related terms and conditions you that have agreed to at the
    //         beginning of the application proess.
    //       </Text>
    //     </View>

    //     <Text
    //       style={{
    //         marginTop: 15,
    //         fontWeight: "bold",
    //         color: "black",
    //         fontSize: 20,
    //       }}
    //     >
    //       Responsible Lending Reminder :{" "}
    //       <Text style={{ fontSize: 18, fontWeight: "normal" }}>
    //         To borrow or not borrow? Borrow only if you can repay!
    //       </Text>
    //     </Text>
    //     <Text
    //       style={{
    //         marginTop: 15,
    //         fontWeight: "bold",
    //         color: "black",
    //         fontSize: 20,
    //       }}
    //     >
    //       Smart tips :{" "}
    //       <Text style={{ fontSize: 18, fontWeight: "normal" }}>
    //         You may access the repayment ability first to avoid any
    //         over-borrowing and have a clear understanding of your financial
    //         condition, daily expenses, actual borrowing needs, Also please repay
    //         the load on time to avoid late payment charges and additional
    //         overdue interest.
    //       </Text>
    //     </Text>

    //     <View
    //       style={{
    //         width: "100%",
    //         backgroundColor: "#fcf1f1",
    //         marginTop: 15,
    //         padding: 15,
    //       }}
    //     >
    //       <Text style={{ color: "red", fontSize: 13 }}>
    //         Please tick the box after click and read the Personal Loan
    //         Application Declaration
    //       </Text>
    //       <View style={{ flexDirection: "row", marginTop: 15 ,alignItems:"center"}}>
    //         <TouchableOpacity
    //           style={{
    //             width: 25,
    //             height: 25,
    //             borderRadius: 25,
    //             borderWidth: 1,
    //             borderColor: "gray",
    //           }}
    //         ></TouchableOpacity>

    //         <Text style={{fontSize:20,color:"black",marginLeft:15}}>I confirm that I have read and agreed to be bound by the above declaration, terms and confirm my understanding to the responsible lending reminder and summary page details before submitting my application.</Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  );
};

export default Declaration;

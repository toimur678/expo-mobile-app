import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import  Animated  from "react-native-reanimated";

export default function WelcomeScreen() {
  const animation =useRef(null);
  const navigation = useNavigation();

  return (
    <View className = "bg-[#eef2e1] flex-1">
      <StatusBar style = "light" />
      {/*Title and subttitle*/}
      <View className="flex items-center">
        <Text className="text-black font-extrabold tracking-widest"
        style={{
          fontSize: hp(4.5),
          paddingLeft:0,
          marginTop:100,
          marginBottom:-100,
        }}>YEŞİL SAYFALAR</Text>
      </View>
      <View className="flex items-center">
        <LottieView
          autoPlay
          ref = {animation}
          style={{
            width: wp(90),
            height: hp(90),
            marginLeft:25,
            marginTop:-50,
          }}
          source={require("../../assets/main/farm.json")}
        />
      </View>
      <View className="flex items-center">
        <TouchableOpacity
        style={{
          backgroundColor: "#000000",
          paddingVertical: hp(1.5),
          paddingHorizontal: hp(10),
          borderRadius: hp(1.5),
          marginTop: -60,
          }}
          onPress={()=> navigation.navigate("Login")}
        >
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
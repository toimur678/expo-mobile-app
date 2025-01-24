import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";
import  Animated  from "react-native-reanimated";

export default function LoginScreen() {
  const navigation = useNavigation();
  const animation =useRef(null);

  return (
    <View className = "bg-[#eef2e1] flex-1">

      <View className="flex items-center">
        <LottieView
          autoPlay
          ref = {animation}
          style={{
            width: wp(90),
            height: hp(90),
            marginLeft:0,
            marginTop:-150,
            marginBottom:-150,
          }}
          source={require("../../assets/main/dp.json")}
        />
      </View>

      <View>
        <View className="flex items-center">
          <TouchableOpacity
          style={{
            backgroundColor: "#000000",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(10),
            borderRadius: hp(1.5),
            marginTop: 100,
            }}
            onPress={()=> navigation.navigate("Home")}
          >
            <Text className="text-white font-bold">Login</Text>
          </TouchableOpacity>
        </View>
          
      </View>
    </View>
  )
}
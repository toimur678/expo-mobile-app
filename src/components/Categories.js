import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Categories() {
  return (
    <View>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
        >
            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/olive.jpg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                                
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Olive</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/grape.jpg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                                
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Grape</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/cherry.jpg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                                
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Cherry</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/apricot.webp")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                               
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Apricot</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/nut.jpg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                                
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Nut</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/mint.jpeg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                                
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Mint</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex items-center space-y-1">
                    <View className={"rounded-xl p-[6px]"}>
                        <Image
                            source={require("./../../assets/veg/plum.jpg")} 
                            style={{
                                borderColor: "black",
                                borderWidth: 1,
                                width: hp(8),
                                height: hp(8),                               
                            }}
                            className="rounded-full"
                        />
                        <Text
                            className="text-neutral-800"
                        >Plum</Text>
                    </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}
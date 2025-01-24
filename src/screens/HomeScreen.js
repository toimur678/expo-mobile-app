import { View, Text, StatusBar, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
//import React, { useEffect, useState } from 'react';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import {
  //widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from '../components/Categories';

//import axios from "axios";

export default function HomeScreen() {
  //const [activeCategory, setActiveCategory] = useState("Beef")
  //const [category, setCategory] = useState([])
  //const [meals, setMeals] = useState([])

  /*useEffect(()=> {
    getCategories();
    //getRecipes();
  }, []);*/

  /*const handleChangeCategory = (category) => {
    //getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }*/

  /*const getCategories = async () => {
    try {
      const response = axios.get (
        "http://www.themealdb.com/api/json/v1/1/categories.php"
      )
    } catch (error){
      console.log(error);
    }
  }*/

  return (
    <View style={{backgroundColor:"#eef2e1"}} className ="flex-1">
      <StatusBar style="dark"/>

      <SafeAreaView>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom :50,
          }}
          className="space-y pt-10"
        >
          {/* Avatar and Bell Icons */}
          <View className="mx-4 flex-row justify-between items-center">
            <TouchableOpacity>
              <AdjustmentsHorizontalIcon size= "30" color={"grey"}/>
            </TouchableOpacity>
            <Image
              source={require("./../../assets/main/profile.jpg")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
              }}
              className="rounded-full"
            />
          </View>

          {/* Headlines */}
          <View className="mx-4 space-y-1 mb-2">
            <View>
              <Text
              style={{
                fontSize: hp(3.5),
                }
              }
              className ="font-bold text-neutral-800"
              >Buy & Sell Your Crops</Text>
              <Text
                style={{
                  fontSize: hp(3.5),
                  }
                }
              className ="font-extrabold text-neutral-800"
              >All in <Text className="text-[#4cbb17]">Yeşil Sayfalar</Text></Text>
              <Text></Text>
            </View>
          </View>
          
          {/* Search Bar */}
          <View className="mx-4 flex-row items-center border rounded-xl border-black p-[6px]">
            <View>
              <MagnifyingGlassIcon 
                size={hp(3.5)}
                color={"grey"}
                strokeWidth={4}
                />
            </View>
            <TextInput
              placeholder="   Search Your Crops"
              style={{
                fontSize: hp(1.7)
              }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
            />
          </View>

          {/* Cetegories */}
          <View>
            <Text></Text>
            <Categories />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

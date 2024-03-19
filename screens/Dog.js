import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Dog({ navigation, route }) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} route={route} />

      <ScrollView
        className="p-4"
        contentContainerStyle={{
          paddingBottom: 72,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="space-y-4">
          <Image
            source={{ uri: route.params.url }}
            className="w-full h-96 object-contain rounded-lg"
          />
          <Text className="text-xl font-bold text-slate-800">
            {route.params.breeds[0].name}
          </Text>

          <View className="flex-row flex-wrap gap-4">
            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Bred For:
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].bred_for}
              </Text>
            </View>

            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Breed Group:
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].breed_group}
              </Text>
            </View>

            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Life Span:
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].life_span}
              </Text>
            </View>

            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Temperament
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].temperament}
              </Text>
            </View>

            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Height
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].height.metric} cm
              </Text>
            </View>

            <View className="bg-slate-200 p-2 rounded-lg space-y-2 w-[150px]">
              <Text className="font-bold text-slate-800 text-center">
                Weight
              </Text>
              <Text className="text-slate-600 text-center">
                {route.params.breeds[0].weight.metric} kg
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

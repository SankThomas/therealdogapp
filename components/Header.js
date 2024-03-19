import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Header({ navigation, route }) {
  return (
    <View className="pr-4 pl-2 pb-3 flex-row items-center justify-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={28} color="#111827" />
      </TouchableOpacity>

      <Text className="font-bold text-slate-800">
        {route.params.breeds[0].name}
      </Text>
    </View>
  );
}

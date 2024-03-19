import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    setIsLoading(true);

    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
      requestOptions
    );
    const data = await res.json();
    setDogs(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-slate-100 p-4">
        <Text className="font-bold text-base text-center text-slate-800">
          The Real Dog App
        </Text>
      </View>

      <ScrollView
        className="p-4"
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            dogs.map((dog) => (
              <Pressable
                key={dog.id}
                className="p-4 rounded-lg border border-slate-300 mb-4"
                onPress={() => navigation.navigate("Dog", dog)}
              >
                <Image
                  source={{ uri: dog.url }}
                  className="w-full h-52 object-cover object-top rounded-lg mb-4"
                />
                {dog.breeds.map((breed, index) => (
                  <Text
                    key={index}
                    className="font-bold text-base text-slate-800 text-center"
                  >
                    {breed.name}
                  </Text>
                ))}
              </Pressable>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

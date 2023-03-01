import { useEffect, useState } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";

export default Loading = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "yellow", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={{ width: 200, height: 200 }} source={require("../images/chicken.png")} />
      <Text style={{ marginTop: 10, fontSize: 40, fontWeight: "600" }}>치킨 일기</Text>
    </SafeAreaView>
  );
};

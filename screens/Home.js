import { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default Home = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route);
  }, []);
  return (
    <View>
      <Text>This is Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

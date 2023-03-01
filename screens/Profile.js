import { View, Text, Button } from "react-native";

export default Profile = ({ navigation }) => {
  return (
    <View>
      <Text>This is Profile</Text>
      <Button title="Go to Profile... again" onPress={() => navigation.navigate("Profile")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

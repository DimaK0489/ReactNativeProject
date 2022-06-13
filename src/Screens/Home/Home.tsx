import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("AuthStack")}>
        Go to Authorized
      </Button>
    </View>
  );
};
export default Home;

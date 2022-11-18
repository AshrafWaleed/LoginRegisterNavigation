import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

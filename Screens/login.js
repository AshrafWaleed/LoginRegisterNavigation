import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button
        title="Login"
        onPress={() => {
          navigation.replace("Home");
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

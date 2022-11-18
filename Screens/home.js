import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const home = ({ navigation }) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="Signout"
        onPress={() => {
          navigation.replace("Login");
        }}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});

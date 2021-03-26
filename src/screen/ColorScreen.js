import React from "react";
import { StyleSheet, Button, View } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add  a Color" />
      <View
        style={{ height: 100, width: 100, backgroundColor: "rgb(0 ,222 ,0)" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ColorScreen;

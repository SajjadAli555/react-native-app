import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDisplay from "../component/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <ImageDisplay
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDisplay
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDisplay
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={10}
      />
    </View>
  );
}
const styles = StyleSheet.create({});

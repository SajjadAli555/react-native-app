import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";

const ImageDisplay = ({imageSource,title,score}) => {
  console.log(score);
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score -{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDisplay;

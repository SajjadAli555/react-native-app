import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function List() {
  return (
    <View style={styles.container}>
      <Text>List on Screen </Text>
      <Text>Helo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(100, 95, 205)",
    alignItems: "center",
    justifyContent: "center",
  },
});

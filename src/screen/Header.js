import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function HeaderScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello HeaderScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

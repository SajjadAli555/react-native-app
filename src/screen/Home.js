import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is over Homepage</Text>
      <Button
        onPress={() => navigation.navigate("Header", { screen: "Header" })}
        title="Go To Header"
      />
      <Button
        title="Go to List"
        onPress={() =>
          navigation.navigate("ListScreen", { Screen: "ListScreen" })
        }
      />
      <Button
        title="Go to Image Demo"
        onPress={() =>
          navigation.navigate("ImageScreen", { Screen: "ImageScreen" })
        }
      />
      <Button
        title="Go to Counter Demo"
        onPress={() =>
          navigation.navigate("CounterScreen", { Screen: "CounterScreen" })
        }
      />
      <Button
        title="Go to Color Demo"
        onPress={() =>
          navigation.navigate("ColorScreen", { Screen: "ColorScreen" })
        }
      />
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

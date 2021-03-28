import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      {password.length < 4 ? <Text>Password must be 4 Characters</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;

// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/screen/Home";
import HeaderScreen from "./src/screen/Header";
import List from "./src/screen/ListScreen";
import ImageDisplay from "./src/component/ImageDetail";
import ImageScreen from "./src/screen/ImageScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen";
import SquareScreen from "./src/screen/SquareScreen";
import TextScreen from "./src/screen/TextScreen";
import BoxScreen from "./src/screen/BoxScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
        <Stack.Screen name="Header" component={HeaderScreen} />
        <Stack.Screen name="ListScreen" component={List} />
        <Stack.Screen name="ImageDetail" component={ImageDisplay} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

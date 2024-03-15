import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HelloWorldScreen } from "./src/HelloWorld";
import { ExampleWebViewScreen } from "./src/ExampleWebViewScreen";

const Stack = createStackNavigator();

export const PocScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash Screen"
        component={HelloWorldScreen}
      />
      <Stack.Screen name="WebView Screen" component={ExampleWebViewScreen} />
    </Stack.Navigator>
  );
};

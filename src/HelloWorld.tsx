import React from "react";
import { Text, Button, View, HStack } from "native-base";
import { Linking, NativeModules } from "react-native";

import { NavigationProp } from "@react-navigation/native";

interface props {
  navigation: NavigationProp<any, any>;
  deepLink?: string;
}
export const HelloWorldScreen = ({
  navigation,
  deepLink = "cma00519://Transfers",
}: props) => {
  const { NativeRouterModule } = NativeModules;

  const onPress = () => {
    NativeRouterModule.dismiss();
  };

  function openDeepLink(deepLink: string): void {
    Linking.canOpenURL(deepLink)
      .then((supported) => {
        if (supported) {
          onPress();
          Linking.openURL(deepLink);
        } else {
          onPress();
        }
      })
      .catch((error) => {
        onPress();
        console.error("Error occurred while opening deep link: ", error);
      });
  }

  return (
    <View
      borderColor="#b30000"
      style={{ flex: 1 }}
      justifyContent={"center"}
      alignItems="center"
      backgroundColor={"#133806"}
    >
      <Text color="white" fontSize="23px" fontWeight="bold" paddingY="6">
        Hello, World!
      </Text>
      <Text color="white" fontSize="23px" fontWeight="bold" paddingBottom="6">
        This is a RN screen.
      </Text>

      <Button
        onPress={onPress}
        _pressed={{ bg: "#b1e004" }}
        bg="#90b800"
        mx="6"
        my="4"
      >
        <HStack>
          <Text color="white" fontSize="20" fontWeight={"bold"} ml="0.5">
            Native login
          </Text>
          <Text color="white" fontSize="20" mt="0.4" ml="1" fontWeight={"bold"}>
            →
          </Text>
        </HStack>
      </Button>

      <Button
        onPress={() => navigation.navigate("WebView Screen")}
        _pressed={{ bg: "#b1e004" }}
        bg="#90b800"
        mx="6"
        my="4"
      >
        <HStack>
          <Text color="white" fontSize="20" fontWeight={"bold"} ml="0.5">
            WebView Screen
          </Text>
          <Text color="white" fontSize="20" mt="0.5" ml="1" fontWeight={"bold"}>
            →
          </Text>
        </HStack>
      </Button>
      <Button
        onPress={() => openDeepLink(deepLink)}
        _pressed={{ bg: "#b1e004" }}
        bg="#90b800"
        mx="6"
        my="4"
      >
        <HStack>
          <Text color="white" fontSize="20" fontWeight={"bold"} ml="0.5">
            Transfers Deep Link
          </Text>
          <Text color="white" fontSize="20" mt="0.5" ml="1" fontWeight={"bold"}>
            →
          </Text>
        </HStack>
      </Button>

      <Button
        onPress={() => openDeepLink("cma00519://InvalidLink")}
        _pressed={{ bg: "#b1e004" }}
        bg="#90b800"
        mx="6"
        my="4"
      >
        <HStack>
          <Text color="white" fontSize="20" fontWeight={"bold"} ml="0.5">
            Invalid Deep Link
          </Text>
          <Text color="white" fontSize="20" mt="0.5" ml="1" fontWeight={"bold"}>
            →
          </Text>
        </HStack>
      </Button>
    </View>
  );
};

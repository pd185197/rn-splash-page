import { WebView } from "react-native-webview";
import { View, Text, HStack, Pressable } from "native-base";
import React, { useEffect } from "react";
import { RouteProp, NavigationProp } from "@react-navigation/native";
interface props {
  onPress?: () => void;
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
export const ExampleWebViewScreen = ({ navigation }: props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <HStack>
            <Text
              marginX={1.5}
              fontSize="16"
              fontWeight={"bold"}
              color="#90b800"
            >
              ←
            </Text>
            <Text fontWeight={"bold"} fontSize="16" color="#90b800">
              Back
            </Text>
          </HStack>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        startInLoadingState
        source={{ uri: "https://github.com/facebook/react-native" }}
      />
    </View>
  );
};

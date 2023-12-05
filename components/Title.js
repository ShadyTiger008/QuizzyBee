import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({title}) => {
  return (
    <View className="text-center w-full justify-center items-center">
      <Text className="text-3xl font-semibold text-green-500">{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});

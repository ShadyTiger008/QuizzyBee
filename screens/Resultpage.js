import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Fail from "../assets/fail.gif";
import Pass from "../assets/pass.gif";
import Fabulous from "../assets/fabulous.gif";
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Title';


const Resultpage = ({ navigation, route }) => {
  const { score, correctAnswers, attempted } = route.params;
  console.log(score, correctAnswers, attempted);
  return (
    <SafeAreaView className="p-5 flex flex-col justify-between h-full">
      <View className="flex flex-col">
        <Title title="RESULT" />
        <View className="flex flex-row justify-between mt-10">
          <Text className="text-2xl font-semibold">Total Obtained Marks: </Text>
          <Text
            className={`text-2xl font-semibold  ${
              score < 50
                ? "text-red-500"
                : score > 80
                ? "text-green-500"
                : "text-blue-500"
            }`}>
            {score}
          </Text>
        </View>
        <View>
          <View className="flex flex-row justify-between mt-10">
            <Text className="text-xl font-semibold">Total Attempted: </Text>
            <Text className="text-xl font-semibold">{attempted}</Text>
          </View>
          <View className="flex flex-row justify-between mt-2">
            <Text className="text-md font-semibold">Not Attempted: </Text>
            <Text className="text-md font-semibold">{10 - attempted}</Text>
          </View>
        </View>
        <View>
          <View className="flex flex-row justify-between mt-10">
            <Text className="text-xl font-semibold">
              Total Correct Answers:
            </Text>
            <Text className="text-xl font-semibold">{correctAnswers}</Text>
          </View>
          <View className="flex flex-row justify-between mt-2">
            <Text className="text-md font-semibold">Incorrect Answers:</Text>
            <Text className="text-md font-semibold">
              {10 - (correctAnswers + (10 - attempted))}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <Text
          className={`text-2xl font-bold tracking-widest  ${
            score < 50
              ? "text-red-500"
              : score > 80
              ? "text-green-500"
              : "text-blue-500"
          }`}>
          {score < 50 ? "Fail" : score > 80 ? "Fabulous" : "Pass"}
        </Text>
      </View>
      <View className="justify-center items-center w-full">
        <Image
          source={`${score < 50 ? Fail : score > 80 ? Fabulous : Pass}`}
          style={{ height: 300, width: 300, resizeMode: "contain" }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}
          className=" bg-emerald-500 w-fill text-center justify-center items-center h-12 rounded-xl">
          <Text className="text-lg font-semibold text-white">GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Resultpage

const styles = StyleSheet.create({})
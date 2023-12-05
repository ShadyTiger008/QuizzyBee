import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title';
import QuizImage from '../assets/quiz.png'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = () =>
{
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white p-5 flex flex-col justify-between h-full">
      <Title title="QuizzyBee" />
      <View className="justify-center items-center w-full">
        <Image
          source={QuizImage}
          style={{ height: 300, width: 300, resizeMode: "contain" }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quizpage")}
        className=" bg-emerald-400 w-fill text-center justify-center items-center h-12 rounded-xl">
        <Text className="text-lg font-semibold text-white">Start!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Homepage

const styles = StyleSheet.create({})
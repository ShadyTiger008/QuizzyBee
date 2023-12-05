import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './screens/Homepage';
import Quizpage from './screens/Quizpage';
import Resultpage from './screens/Resultpage';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  );
}
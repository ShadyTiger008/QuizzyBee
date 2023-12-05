import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../screens/Homepage";
import Quizpage from "../screens/Quizpage";
import Resultpage from "../screens/Resultpage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quizpage"
        component={Quizpage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Resultpage"
        component={Resultpage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
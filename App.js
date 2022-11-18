import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./Screens/login";
import register from "./Screens/register";
import home from "./Screens/home";

export default App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={login} name="Login" />
        <Stack.Screen component={register} name="Register" />
        <Stack.Screen component={home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

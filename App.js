import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./Screens/login";
import register from "./Screens/register";
import home from "./Screens/home";

export default App = () => {
  const S = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <S.Navigator>
        <S.Screen component={login} name="Login" />
        <S.Screen component={register} name="Register" />
        <S.Screen component={home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

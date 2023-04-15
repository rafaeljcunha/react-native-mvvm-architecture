import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersList from "../app/views/UsersList";
import UserProfile from "../app/views/UserProfile";

export type RootStackParamList = {
  UsersList: undefined;
  UserProfile: { userId: string };
};

export type NavigateProps = {
  navigate(route: string, params?: any): void;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersList">
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useUserViewModel } from "../view-models/user.view.model";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

type UserProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "UserProfile"
>;

const UserProfile: React.FC<UserProfileProps> = ({ route }) => {
  const { params } = route;
  const { userId } = params;
  const { user } = useUserViewModel(userId);

  return (
    <SafeAreaView style={styles.safeArea} testID="safe-area-user-profile">
      <View style={styles.view}>
        <Text style={styles.text}>Nome: {user?.name}</Text>
        <Text style={styles.text}>Email: {user?.email}</Text>
        <Text style={styles.text}>Telefone: {user?.phone}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  view: { padding: 16 },
  text: { marginBottom: 8 },
});

import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import UserCard from "../../components/UserCard";
import { useUsersViewModel } from "../view-models/users.view.model";
import UserModel from "../models/user.model";

const UsersList = () => {
  const { users, onPressUserId } = useUsersViewModel();

  return (
    <SafeAreaView style={styles.safearea}>
      <FlatList
        testID="users-flat-list"
        style={styles.flatlist}
        data={users}
        renderItem={({ item }) => (
          <UserCard
            onPress={() => onPressUserId(item.id)}
            {...(item as UserModel)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  separator: { borderWidth: 1, marginVertical: 8 },
  flatlist: { padding: 16 },
  safearea: { flex: 1 },
});

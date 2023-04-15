import { useEffect, useState } from "react";
import { fetchUsers } from "../repositories/users.repository";
import UserModel from "../models/user.model";
import { useNavigation } from "@react-navigation/native";
import { NavigateProps } from "../../navigation";

export function useUsersViewModel() {
  const navigation = useNavigation<NavigateProps>();
  const [users, setUsers] = useState<UserModel[]>([]);

  async function getUsersList() {
    const usersResponse = await fetchUsers();
    setUsers(usersResponse);
  }

  function onPressUserId(userId: number) {
    navigation.navigate("UserProfile", {
      userId,
    });
  }

  useEffect(() => {
    getUsersList();
  }, []);

  return { users, onPressUserId };
}

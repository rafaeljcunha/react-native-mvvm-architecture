import { useEffect, useState } from "react";
import { fetchUserById } from "../repositories/users.repository";
import UserModel from "../models/user.model";

export function useUserViewModel(userId: string) {
  const [user, setUser] = useState<UserModel>();

  async function getUserById() {
    const user = await fetchUserById(userId);
    setUser(user);
  }

  useEffect(() => {
    getUserById();
  }, [userId]);

  return { user };
}

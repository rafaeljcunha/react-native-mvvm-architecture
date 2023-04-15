import { Text, TouchableOpacity } from "react-native";
import UserModel from "../app/models/user.model";

type UserCardProps = Pick<UserModel, "email" | "name"> & { onPress(): void };

const UserCard = ({ name, email, onPress }: UserCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID="user-card">
      <Text style={{ marginBottom: 8 }}>{name}</Text>
      <Text>{email}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;

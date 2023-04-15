import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

export const fetchUsers = async () =>
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => users.map((user: IUser) => new UserModel(user)));

export const fetchUserById = async (userId: string) =>
  fetch(`http://localhost:3000/users/${userId}`)
    .then((response) => response.json())
    .then((user) => new UserModel(user));

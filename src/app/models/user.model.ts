import { IUser } from "../interfaces/user.interface";

class UserModel implements IUser {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor({ id, name, email, phone }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export default UserModel;

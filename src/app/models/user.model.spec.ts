import { userMock } from "../../__mocks__";
import UserModel from "./user.model";

describe("UserModel", () => {
  it("should returns user model values when has passed props", () => {
    const userModel = new UserModel(userMock);

    expect(userModel.name).toEqual(userMock.name);
    expect(userModel.id).toEqual(userMock.id);
    expect(userModel.email).toEqual(userMock.email);
    expect(userModel.phone).toEqual(userMock.phone);
  });
});

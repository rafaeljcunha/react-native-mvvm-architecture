import { render, renderHook } from "@testing-library/react-native";
import UserProfile from "./UserProfile";
import { RootStackParamList } from "../../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { userMock as mockuser } from "../../__mocks__";
import { useUserViewModel } from "../view-models/user.view.model";

type UserProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "UserProfile"
>;

const route = {
  params: { userId: "1" },
};

jest.mock("../view-models/user.view.model", () => ({
  useUserViewModel: jest.fn(() => ({
    user: mockuser,
  })),
}));

const setup = (props: UserProfileProps) => render(<UserProfile {...props} />);

describe("<UserProfile />", () => {
  it("should find if testId contains on interface", () => {
    const { getByTestId } = setup({ route } as UserProfileProps);

    const element = getByTestId("safe-area-user-profile");
    expect(element).toBeTruthy();
  });

  it("should returns name value contains interface", () => {
    const { getByText } = setup({ route } as UserProfileProps);
    const element = `Nome: ${mockuser.name}`;
    const getElement = getByText(element);

    expect(getElement).toBeTruthy();
  });
});

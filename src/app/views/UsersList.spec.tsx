import { fireEvent, render } from "@testing-library/react-native";
import { userMock as mockuser } from "../../__mocks__";
import UsersList from "./UsersList";

jest.mock("../view-models/users.view.model", () => ({
  useUsersViewModel: jest.fn(() => ({
    users: [mockuser],
    onPressUserId: jest.fn(),
  })),
}));

const setup = () => render(<UsersList />);

describe("<UsersList />", () => {
  it("should find if testId contains on interface", () => {
    const { getByTestId } = setup();
    const element = getByTestId("users-flat-list");

    expect(element).toBeTruthy();
  });

  it("should returns name value contains interface", () => {
    const { getByText } = setup();
    const getElement = getByText(mockuser.name);

    expect(getElement).toBeTruthy();
  });
});

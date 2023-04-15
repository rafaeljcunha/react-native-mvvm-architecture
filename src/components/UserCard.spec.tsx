import { fireEvent, render } from "@testing-library/react-native";
import UserCard from "./UserCard";
import { userMock } from "../__mocks__";

const onPressUserId = jest.fn();
const setup = () => render(<UserCard onPress={onPressUserId} {...userMock} />);

describe("<UserCard />", () => {
  it("should press user card and excute on press method", () => {
    const { getByTestId } = setup();
    const getElement = getByTestId("user-card");

    fireEvent.press(getElement);
    expect(onPressUserId).toHaveBeenCalled();
    expect(onPressUserId).toHaveBeenCalledTimes(1);
  });

  it("should returns name value contains interface", () => {
    const { getByText } = setup();
    const getElement = getByText(userMock.name);

    expect(getElement).toBeTruthy();
  });
});

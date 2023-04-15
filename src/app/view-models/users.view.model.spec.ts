import { act, renderHook } from "@testing-library/react-hooks";
import { userMock } from "../../__mocks__";
import { useUsersViewModel } from "./users.view.model";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: () => {},
  }),
}));

describe("UsersViewModel", () => {
  it("should returns all users correctly", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([userMock]),
      })
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() => useUsersViewModel());

    await waitForNextUpdate();
    expect(result.current.users).toEqual([userMock]);
  });
});

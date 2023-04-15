import { act, renderHook } from "@testing-library/react-hooks";
import { useUserViewModel } from "./user.view.model";
import { userMock } from "../../__mocks__";

describe("UserViewModel", () => {
  it("should returns user correctly", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(userMock),
      })
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() =>
      useUserViewModel("1")
    );

    await waitForNextUpdate();
    expect(result.current.user).toEqual(userMock);
  });
});

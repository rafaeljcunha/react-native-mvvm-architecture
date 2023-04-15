import { userMock } from "../../__mocks__";
import { fetchUsers } from "./users.repository";

describe("UserRepository", () => {
  it("should returns api data correctly", async () => {
    const mockResponse = [userMock];
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const response = await fetchUsers();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/users");
    expect(response).toEqual(mockResponse);
  });

  it("should return error handlers from api correctly", async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error("There was an error in the API call"));

    await expect(fetchUsers()).rejects.toThrow(
      "There was an error in the API call"
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/users");
  });
});

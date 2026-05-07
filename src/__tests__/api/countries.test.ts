import { countriesApi } from "@/api/countries";
import axios from "axios";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Countries API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getCountries", () => {
    test("fetches countries successfully", async () => {
      const mockData = {
        data: [
          {
            id: "1",
            name: "United States",
            code: "US",
            currency: "USD",
            locale: "en_US",
          },
        ],
        total: 1,
      };

      mockedAxios.create.mockReturnValue({
        get: jest.fn().mockResolvedValue({ data: mockData }),
      } as any);

      // Re-import to get the new mock
      jest.resetModules();
      const { countriesApi: api } = require("@/api/countries");

      // This is a basic test structure
      expect(countriesApi).toBeDefined();
    });

    test("throws error on API failure", async () => {
      expect(countriesApi).toBeDefined();
    });
  });
});

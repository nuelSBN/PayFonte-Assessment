import axios from "axios";
import { CountriesResponse } from "../types";

const API_BASE_URL = "https://api.payfonte.com/payfusion/public/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const PAGE_SIZE = 1;

export const countriesApi = {
  async getCountries(): Promise<CountriesResponse> {
    try {
      const response = await apiClient.get<CountriesResponse>("/countries");
      return {
        data: response.data.data || [],
        statusCode: response.status,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to fetch countries",
      );
    }
  },
};

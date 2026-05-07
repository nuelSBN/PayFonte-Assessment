import { useQuery } from "@tanstack/react-query";
import { countriesApi } from "../api/countries";
import { Country } from "../types";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const data = await countriesApi.getCountries();
      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
};

export const useFilteredCountries = (
  countries: Country[] | undefined,
  searchQuery: string,
) => {
  if (!countries) return [];

  return countries.filter((country) => {
    const matchesSearch =
      !searchQuery ||
      country.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.countryCode.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });
};

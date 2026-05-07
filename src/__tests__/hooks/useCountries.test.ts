import { useFilteredCountries } from "@/hooks/useCountries";
import { Country } from "@/types";

describe("useFilteredCountries", () => {
  const mockCountries: Country[] = [
    {
      countryId: "1",
      countryName: "United States",
      countryCode: "US",
      currency: "USD",
      locale: "en_US",
      internetCountryCode: "US",
      flagURL: { png: "", svg: "", alt: "" },
    },
    {
      countryId: "2",
      countryName: "United Kingdom",
      countryCode: "GB",
      currency: "GBP",
      locale: "en_GB",
      internetCountryCode: "GB",
      flagURL: { png: "", svg: "", alt: "" },
    },
    {
      countryId: "3",
      countryName: "India",
      countryCode: "IN",
      currency: "INR",
      locale: "en_IN",
      internetCountryCode: "IN",
      flagURL: { png: "", svg: "", alt: "" },
    },
  ];

  test("returns all countries when no filter is applied", () => {
    const result = useFilteredCountries(mockCountries, "");
    expect(result).toHaveLength(3);
  });

  test("filters countries by name search", () => {
    const result = useFilteredCountries(mockCountries, "united");
    expect(result).toHaveLength(2);
    expect(
      result.every((c) => c.countryName.toLowerCase().includes("united")),
    ).toBe(true);
  });

  test("filters countries by code search", () => {
    const result = useFilteredCountries(mockCountries, "US");
    expect(result).toHaveLength(1);
    expect(result[0].countryCode).toBe("US");
  });

  test("returns empty array when no matches found", () => {
    const result = useFilteredCountries(mockCountries, "xyz");
    expect(result).toHaveLength(0);
  });

  test("handles undefined countries gracefully", () => {
    const result = useFilteredCountries(undefined, "test");
    expect(result).toEqual([]);
  });
});

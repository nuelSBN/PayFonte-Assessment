import {
  formatCountryCode,
  formatCurrency,
  formatLocale,
  searchMatches,
  sortCountriesByName,
} from "@/utils/helpers";

describe("Helper Utilities", () => {
  describe("formatCountryCode", () => {
    test("converts code to uppercase", () => {
      expect(formatCountryCode("us")).toBe("US");
      expect(formatCountryCode("GB")).toBe("GB");
    });
  });

  describe("formatCurrency", () => {
    test("converts currency to uppercase", () => {
      expect(formatCurrency("usd")).toBe("USD");
      expect(formatCurrency("GBP")).toBe("GBP");
    });
  });

  describe("formatLocale", () => {
    test("replaces underscores with hyphens", () => {
      expect(formatLocale("en_US")).toBe("en-US");
      expect(formatLocale("en_GB")).toBe("en-GB");
    });
  });

  describe("searchMatches", () => {
    test("performs case-insensitive search", () => {
      expect(searchMatches("United States", "united")).toBe(true);
      expect(searchMatches("FRANCE", "france")).toBe(true);
      expect(searchMatches("Germany", "xyz")).toBe(false);
    });
  });

  describe("sortCountriesByName", () => {
    test("sorts countries alphabetically", () => {
      const countries = [
        { name: "Brazil" },
        { name: "Australia" },
        { name: "Canada" },
      ];

      const sorted = sortCountriesByName(countries);

      expect(sorted[0].name).toBe("Australia");
      expect(sorted[1].name).toBe("Brazil");
      expect(sorted[2].name).toBe("Canada");
    });

    test("does not mutate original array", () => {
      const countries = [{ name: "B" }, { name: "A" }];
      const original = [...countries];

      sortCountriesByName(countries);

      expect(countries).toEqual(original);
    });
  });
});

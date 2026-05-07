// Common utility functions
export const formatCountryCode = (code: string): string => {
  return code.toUpperCase();
};

export const formatCurrency = (currency: string): string => {
  return currency.toUpperCase();
};

export const formatLocale = (locale: string): string => {
  return locale.replace("_", "-");
};

export const searchMatches = (text: string, query: string): boolean => {
  return text.toLowerCase().includes(query.toLowerCase());
};

export const sortCountriesByName = (
  countries: Array<{ name: string }>,
): Array<{ name: string }> => {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name));
};

export interface Country {
  countryId: string;
  countryName: string;
  countryCode: string;
  currency: string;
  currencyCode?: string;
  currencyIcon?: string;
  locale: string;
  internetCountryCode: string;
  flag?: string;
  flagURL: {
    png: string;
    svg: string;
    alt: string;
  };
}

export interface CountriesResponse {
  data: Country[];
  statusCode: number;
}

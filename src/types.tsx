export type Country = {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: number;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: unknown
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: string;
}

export type GlobalData = {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered:number;
  }

export type ResponseData = {
  Countries: Country[];
  Date: string;
  Global: GlobalData;
  ID: string;
  Message : string;
}

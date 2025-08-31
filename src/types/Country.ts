export interface Country {
  iso_code?: string;
  data: CountryEntryData[];
}

export interface CountryWithName extends Country {
  name: string;
}

export interface CountryEntryData extends OptionalCountryEntryData {
  year: number;
  population: number;
  nitrous_oxide?: number;
  nitrous_oxide_per_capita?: number;
}

export const optionalCountryEntryKeys = [
  "gdp",
  "cement_co2",
  "cement_co2_per_capita",
  "co2_growth_abs",
  "co2_growth_prct",
  "co2_including_luc",
  "co2_including_luc_growth_abs",
  "co2_including_luc_growth_prct",
  "co2_including_luc_per_capita",
  "co2_including_luc_per_gdp",
  "co2_including_luc_per_unit_energy",
  "co2_per_gdp",
  "co2_per_unit_energy",
  "coal_co2",
  "coal_co2_per_capita",
  "oil_co2",
  "oil_co2_per_capita",
  "gas_co2",
  "gas_co2_per_capita",
  "flaring_co2",
  "flaring_co2_per_capita",
  "other_industry_co2",
  "other_co2_per_capita",
  "consumption_co2",
  "consumption_co2_per_capita",
  "consumption_co2_per_gdp",
  "cumulative_co2",
  "cumulative_co2_including_luc",
  "cumulative_coal_co2",
  "cumulative_oil_co2",
  "cumulative_gas_co2",
  "cumulative_cement_co2",
  "cumulative_flaring_co2",
  "cumulative_luc_co2",
  "cumulative_other_co2",
  "land_use_change_co2",
  "land_use_change_co2_per_capita",
  "total_ghg",
  "total_ghg_excluding_lucf",
  "ghg_per_capita",
  "ghg_excluding_lucf_per_capita",
  "methane",
  "methane_per_capita",
  "primary_energy_consumption",
  "energy_per_capita",
  "energy_per_gdp",
  "share_global_co2",
  "share_global_co2_including_luc",
  "share_global_coal_co2",
  "share_global_oil_co2",
  "share_global_gas_co2",
  "share_global_cement_co2",
  "share_global_flaring_co2",
  "share_global_other_co2",
  "share_global_luc_co2",
  "share_global_cumulative_co2",
  "share_global_cumulative_co2_including_luc",
  "share_global_cumulative_coal_co2",
  "share_global_cumulative_oil_co2",
  "share_global_cumulative_gas_co2",
  "share_global_cumulative_cement_co2",
  "share_global_cumulative_flaring_co2",
  "share_global_cumulative_other_co2",
  "share_global_cumulative_luc_co2",
  "temperature_change_from_co2",
  "temperature_change_from_ch4",
  "temperature_change_from_n2o",
  "temperature_change_from_ghg",
  "share_of_temperature_change_from_ghg",
  "trade_co2",
  "trade_co2_share",
] as const;

export type OptionalCountryEntryData = {
  [K in (typeof optionalCountryEntryKeys)[number]]?: number;
};

export type CountryList = Record<string, Country>;

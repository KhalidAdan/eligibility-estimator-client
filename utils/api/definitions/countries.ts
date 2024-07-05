interface CountryConfig {
  code: string
  agreement: boolean
}

/**
 * The master list of countries. Countries need to exist here, and have a translation in both language files.
 * The ordering here is not used - to order things, update the translations.
 * Ensure AGREEMENT and NO_AGREEMENT exists here as a country code.
 */
export const countryList: CountryConfig[] = [
  { code: 'CAN', agreement: false },
  { code: 'OTH', agreement: false },
  { code: 'AGREEMENT', agreement: true },
  { code: 'NO_AGREEMENT', agreement: false },
  // { code: 'AFG', agreement: false },
  // { code: 'ALB', agreement: false },
  // { code: 'DZA', agreement: false },
  // { code: 'AND', agreement: false },
  // { code: 'AGO', agreement: false },
  // { code: 'ATG', agreement: true },
  // { code: 'ARG', agreement: false },
  // { code: 'ARM', agreement: false },
  // { code: 'AUS', agreement: false },
  // { code: 'AUT', agreement: true },
  // { code: 'AZE', agreement: false },
  // { code: 'BHS', agreement: false },
  // { code: 'BHR', agreement: false },
  // { code: 'BGD', agreement: false },
  // { code: 'BRB', agreement: true },
  // { code: 'BLR', agreement: false },
  // { code: 'BEL', agreement: true },
  // { code: 'BLZ', agreement: false },
  // { code: 'BEN', agreement: false },
  // { code: 'BTN', agreement: false },
  // { code: 'BOL', agreement: false },
  // { code: 'BIH', agreement: false },
  // { code: 'BWA', agreement: false },
  // { code: 'BRA', agreement: true },
  // { code: 'BRN', agreement: false },
  // { code: 'BGR', agreement: true },
  // { code: 'BFA', agreement: false },
  // { code: 'BDI', agreement: false },
  // { code: 'CPV', agreement: false },
  // { code: 'KHM', agreement: false },
  // { code: 'CMR', agreement: false },
  // { code: 'CAF', agreement: false },
  // { code: 'TCD', agreement: false },
  // { code: 'CHL', agreement: true },
  // { code: 'CHN', agreement: true },
  // { code: 'COL', agreement: false },
  // { code: 'COM', agreement: false },
  // { code: 'COG', agreement: false },
  // { code: 'CRI', agreement: false },
  // { code: 'CIV', agreement: false },
  // { code: 'HRV', agreement: true },
  // { code: 'CUB', agreement: false },
  // { code: 'CYP', agreement: true },
  // { code: 'CZE', agreement: false },
  // { code: 'COD', agreement: false },
  // { code: 'DNK', agreement: true },
  // { code: 'DJI', agreement: false },
  // { code: 'DMA', agreement: true },
  // { code: 'DOM', agreement: false },
  // { code: 'ECU', agreement: false },
  // { code: 'EGY', agreement: false },
  // { code: 'SLV', agreement: false },
  // { code: 'GNQ', agreement: false },
  // { code: 'ERI', agreement: false },
  // { code: 'EST', agreement: true },
  // { code: 'SWZ', agreement: false },
  // { code: 'ETH', agreement: false },
  // { code: 'FJI', agreement: false },
  // { code: 'FIN', agreement: true },
  // { code: 'FRA', agreement: true },
  // { code: 'GAB', agreement: false },
  // { code: 'GMB', agreement: false },
  // { code: 'GEO', agreement: false },
  // { code: 'DEU', agreement: true },
  // { code: 'GHA', agreement: false },
  // { code: 'GRC', agreement: true },
  // { code: 'GRD', agreement: true },
  // { code: 'GTM', agreement: false },
  // { code: 'GIN', agreement: false },
  // { code: 'GNB', agreement: false },
  // { code: 'GUY', agreement: false },
  // { code: 'HTI', agreement: false },
  // { code: 'VAT', agreement: false },
  // { code: 'HND', agreement: false },
  // { code: 'HUN', agreement: true },
  // { code: 'ISL', agreement: true },
  // { code: 'IND', agreement: true },
  // { code: 'IDN', agreement: false },
  // { code: 'IRN', agreement: false },
  // { code: 'IRQ', agreement: false },
  // { code: 'IRL', agreement: true },
  // { code: 'ISR', agreement: true },
  // { code: 'ITA', agreement: true },
  // { code: 'JAM', agreement: true },
  // { code: 'JPN', agreement: true },
  // { code: 'JOR', agreement: false },
  // { code: 'KAZ', agreement: false },
  // { code: 'KEN', agreement: false },
  // { code: 'KIR', agreement: false },
  // { code: 'KWT', agreement: false },
  // { code: 'KGZ', agreement: false },
  // { code: 'LAO', agreement: false },
  // { code: 'LVA', agreement: true },
  // { code: 'LBN', agreement: false },
  // { code: 'LSO', agreement: false },
  // { code: 'LBR', agreement: false },
  // { code: 'LBY', agreement: false },
  // { code: 'LIE', agreement: false },
  // { code: 'LTU', agreement: true },
  // { code: 'LUX', agreement: true },
  // { code: 'MDG', agreement: false },
  // { code: 'MWI', agreement: false },
  // { code: 'MYS', agreement: false },
  // { code: 'MDV', agreement: false },
  // { code: 'MLI', agreement: false },
  // { code: 'MLT', agreement: true },
  // { code: 'MHL', agreement: false },
  // { code: 'MRT', agreement: false },
  // { code: 'MUS', agreement: false },
  // { code: 'MEX', agreement: true },
  // { code: 'FSM', agreement: false },
  // { code: 'MDA', agreement: false },
  // { code: 'MCO', agreement: false },
  // { code: 'MNG', agreement: false },
  // { code: 'MNE', agreement: false },
  // { code: 'MAR', agreement: true },
  // { code: 'MOZ', agreement: false },
  // { code: 'MMR', agreement: false },
  // { code: 'NAM', agreement: false },
  // { code: 'NRU', agreement: false },
  // { code: 'NPL', agreement: false },
  // { code: 'NLD', agreement: true },
  // { code: 'NZL', agreement: false },
  // { code: 'NIC', agreement: false },
  // { code: 'NER', agreement: false },
  // { code: 'NGA', agreement: false },
  // { code: 'PRK', agreement: false },
  // { code: 'MKD', agreement: false },
  // { code: 'NOR', agreement: true },
  // { code: 'OMN', agreement: false },
  // { code: 'PAK', agreement: false },
  // { code: 'PLW', agreement: false },
  // { code: 'PSE', agreement: false },
  // { code: 'PAN', agreement: false },
  // { code: 'PNG', agreement: false },
  // { code: 'PRY', agreement: false },
  // { code: 'PER', agreement: true },
  // { code: 'PHL', agreement: true },
  // { code: 'POL', agreement: true },
  // { code: 'PRT', agreement: true },
  // { code: 'QAT', agreement: false },
  // { code: 'ROU', agreement: true },
  // { code: 'RUS', agreement: false },
  // { code: 'RWA', agreement: false },
  // { code: 'KNA', agreement: true },
  // { code: 'LCA', agreement: true },
  // { code: 'VCT', agreement: true },
  // { code: 'WSM', agreement: false },
  // { code: 'SMR', agreement: false },
  // { code: 'STP', agreement: false },
  // { code: 'SAU', agreement: false },
  // { code: 'SEN', agreement: false },
  // { code: 'SRB', agreement: true },
  // { code: 'SYC', agreement: false },
  // { code: 'SLE', agreement: false },
  // { code: 'SGP', agreement: false },
  // { code: 'SVK', agreement: true },
  // { code: 'SVN', agreement: true },
  // { code: 'SLB', agreement: false },
  // { code: 'SOM', agreement: false },
  // { code: 'ZAF', agreement: false },
  // { code: 'KOR', agreement: false },
  // { code: 'SSD', agreement: false },
  // { code: 'ESP', agreement: true },
  // { code: 'LKA', agreement: false },
  // { code: 'SDN', agreement: false },
  // { code: 'SUR', agreement: false },
  // { code: 'SWE', agreement: true },
  // { code: 'CHE', agreement: true },
  // { code: 'SYR', agreement: false },
  // { code: 'TJK', agreement: false },
  // { code: 'TZA', agreement: false },
  // { code: 'THA', agreement: false },
  // { code: 'TLS', agreement: false },
  // { code: 'TGO', agreement: false },
  // { code: 'TON', agreement: false },
  // { code: 'TTO', agreement: true },
  // { code: 'TUN', agreement: false },
  // { code: 'TUR', agreement: true },
  // { code: 'TKM', agreement: false },
  // { code: 'TUV', agreement: false },
  // { code: 'UGA', agreement: false },
  // { code: 'UKR', agreement: false },
  // { code: 'ARE', agreement: false },
  // { code: 'GBR', agreement: false },
  // { code: 'USA', agreement: true },
  // { code: 'URY', agreement: true },
  // { code: 'UZB', agreement: false },
  // { code: 'VUT', agreement: false },
  // { code: 'VEN', agreement: false },
  // { code: 'VNM', agreement: false },
  // { code: 'YEM', agreement: false },
  // { code: 'ZMB', agreement: false },
  // { code: 'ZWE', agreement: false },
]

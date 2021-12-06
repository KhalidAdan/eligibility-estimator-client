import { LivingCountryOptions } from './types'

export default function normalizeLivingCountry(
  country: string
): LivingCountryOptions {
  if (country === LivingCountryOptions.CANADA)
    return LivingCountryOptions.CANADA
  return AGREEMENT_COUNTRIES.includes(country)
    ? LivingCountryOptions.AGREEMENT
    : LivingCountryOptions.NO_AGREEMENT
}

const AGREEMENT_COUNTRIES = [
  'Agreement',
  'Antigua and Barbuda',
  'Austria',
  'Barbados',
  'Belgium',
  'Brazil',
  'Bulgaria',
  'Chile',
  'China',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Dominica',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Grenada',
  'Guernsey',
  'Hungary',
  'Iceland',
  'India',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Korea (South)',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Malta',
  'Mexico',
  'Morocco',
  'Netherlands',
  'Norway',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Romania',
  'St. Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Serbia',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Trinidad and Tobago',
  'Turkey',
  'United Kingdom',
  'United States',
  'Uruguay',
]

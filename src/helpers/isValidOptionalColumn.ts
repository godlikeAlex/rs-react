import {
  optionalCountryEntryKeys,
  type OptionalCountryEntryData,
} from "@/types/Country";

export function isValidOptionalColumn(
  key: string
): key is keyof OptionalCountryEntryData {
  return optionalCountryEntryKeys.includes(
    key as keyof OptionalCountryEntryData
  );
}

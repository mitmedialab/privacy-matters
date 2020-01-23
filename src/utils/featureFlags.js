import { getQueryParam } from "./url";

export const ACCESS = "PRIVACY_MATTERS_2020";

/**
 * QueryParams are the location.search part of the url (e.g. ft=experiment,toggle).
 *
 * Returns true if the feature is found (e.g. if "experiment" is found).
 */
export default function isEnabled(feature) {
  const features = getQueryParam("ft");
  if (features) {
    return features.split(",").indexOf(feature) > -1;
  }
  return false;
}

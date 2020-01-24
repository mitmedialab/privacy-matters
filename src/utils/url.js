import queryString from "query-string";

export function getQueryParam(param) {
  if (typeof window !== 'undefined') {
    const values = queryString.parse(window.location.search);
    return values[param];
  } else {
    return '';
  }
}

export function encodeData(data) {
  return Object.keys(data)
    .map(key => [key, data[key]].join("="))
    .join("&");
}

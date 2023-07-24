export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
export default function appendToEachArrayValue(array, appendString) {
  return array.map(value => appendString + value);
}

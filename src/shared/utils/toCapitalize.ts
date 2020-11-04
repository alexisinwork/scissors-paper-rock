/**
 * Capitalize word
 *
 * @param str Word to transform
 */
const toCapitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1)
}

export default toCapitalize

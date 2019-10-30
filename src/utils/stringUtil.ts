export function firstLowerCase(str: string) {
  if (!str) {
    return str
  }
  return /^[a-z]/.test(str[0]) ? str[0].toLocaleUpperCase() + str.substring(1) : str
}

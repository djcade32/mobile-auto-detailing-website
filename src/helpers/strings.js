export function toSnakeCase(str) {
  // Convert the string to all caps
  const allCapsStr = str.toUpperCase();

  // Replace spaces with underscores
  const snakeCaseStr = allCapsStr.replace(/\s+/g, "_");

  return snakeCaseStr;
}

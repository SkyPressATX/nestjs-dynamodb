export const getKeys = (schema: any): Record<string, string> => {
  let hash: string = ''
  let range: string = ''
  for (const prop in schema) {
    if (schema[prop].keyType === 'HASH') hash = prop
    if (schema[prop].keyType === 'RANGE') range = prop

    if (hash && range) return { range, hash }
  }

  return { range, hash }
}

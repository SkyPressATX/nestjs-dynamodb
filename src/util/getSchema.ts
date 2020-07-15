const DynamoDbSchema = Symbol.for('DynamoDbSchema')

export function getSchema(item: any): any {
  if (item) {
    const schema = item[DynamoDbSchema]
    if (schema && typeof schema === 'object') {
      return schema
    }
  }

  throw new Error(
    'The provided item did not adhere to the DynamoDbDocument protocol.' +
      ' No object property was found at the `DynamoDbSchema` symbol',
  )
}

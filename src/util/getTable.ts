import { DynamoDbTable } from '@aws/dynamodb-data-mapper'
import { DynamoDBClass } from '../module/dynamodb.interfaces'

export const getTable = (dynamoDBClass: DynamoDBClass): string =>
  dynamoDBClass.prototype[DynamoDbTable]

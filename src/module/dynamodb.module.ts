import { DynamicModule, Module } from '@nestjs/common'

import { convertToClassWithOptions } from '../util/convertToClassWithOptions'
import { DynamoDBCoreModule } from './dynamodb.coremodule'
import {
  DynamoDBModuleAsyncOptions,
  DynamoDBModuleOptions,
  DynamoDBInput,
} from './dynamodb.interfaces'
import { createDynamoDBProvider } from './dynamodb.providers'

@Module({})
export class DynamoDBModule {
  static forRoot(options: DynamoDBModuleOptions): DynamicModule {
    return {
      module: DynamoDBModule,
      imports: [DynamoDBCoreModule.forRoot(options)],
    }
  }

  static forRootAsync(options: DynamoDBModuleAsyncOptions): DynamicModule {
    return {
      module: DynamoDBModule,
      imports: [DynamoDBCoreModule.forRootAsync(options)],
    }
  }

  static forFeature(models: DynamoDBInput[]): DynamicModule {
    const convertedModels = models.map(model =>
      convertToClassWithOptions(model),
    )

    const providers = createDynamoDBProvider(convertedModels)

    return {
      module: DynamoDBModule,
      providers,
      exports: providers,
    }
  }
}

import {
  Logger,
  MiddlewareConsumer,
  Module,
  Req,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // applying middleware for product controller
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.GET });

    // also we can use it for excluding for some method
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'Products', method: RequestMethod.GET })
      .forRoutes(ProductsController);
  }
}

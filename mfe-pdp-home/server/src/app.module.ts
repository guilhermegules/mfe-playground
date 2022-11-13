import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthorizedModule } from './modules/authorized/authorized.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { ProductsModule } from './modules/products/products.module';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthorizedModule,
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}

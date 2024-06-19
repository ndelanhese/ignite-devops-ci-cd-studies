import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    // 	type: "mysql",
    // 	host: "mysql",
    // 	port: 3308,
    // 	username: "admin",
    // 	password: "root",
    // 	database: "rocketseat-db",
    // 	entities: [],
    // 	synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

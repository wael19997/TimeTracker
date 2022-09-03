import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions={
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'timeTracker',
      entities: [],
      synchronize: true,
};
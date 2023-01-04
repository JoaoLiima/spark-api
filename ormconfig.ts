import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const TypeOrmConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.MARIADB_HOST,
  port: +process.env.MARIADB_PORT,
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_ROOT_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  synchronize: false,
  autoLoadEntities: false,
  logging: false,
  entities: [__dirname + '/src/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/src/infra/typeorm/migrations/*.ts'],
};

export default TypeOrmConfig;
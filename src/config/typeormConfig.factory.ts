import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import TypeOrmConfig from 'ormconfig';

export function typeOrmConfigFactory(): TypeOrmModuleOptions {
    console.log(process.env.MARIADB_USER)
  return TypeOrmConfig
}
import { Global, Logger, Module } from '@nestjs/common';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import { InferModel } from 'drizzle-orm';
import path from 'path';

export const DRIZZLE_TOKEN = Symbol('PG_CONNECTION');

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE_TOKEN,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger(DrizzleModule.name);
        const username = configService.getOrThrow('POSTGRES_USER');
        const password = configService.getOrThrow('POSTGRES_PASSWORD');
        const host = configService.getOrThrow('POSTGRES_HOST');
        const database = configService.getOrThrow('POSTGRES_DB');

        // const rootFilePath = fileURLToPath(import.meta.url);
        const migrationsFolder = path.join(__dirname, '../drizzle');

        const migrationPgClient = postgres(
          `postgres://${username}:${password}@${host}/${database}`,
          {
            max: 1,
          },
        );

        logger.log('Connected to database');
        const migrationClient = drizzle(migrationPgClient, {
          schema,
        });
        await migrate(migrationClient, { migrationsFolder });
        logger.log('Migrated database');

        const queryPgClient = postgres(
          `postgres://${username}:${password}@${host}/${database}`,
          {
            transform: {
              value(value) {
                if (value instanceof Date) {
                  return value.toISOString();
                } else {
                  return value;
                }
              },
            },
          },
        );

        const db = drizzle(queryPgClient, { schema });

        return db;
      },
    },
  ],
  exports: [DRIZZLE_TOKEN],
})
export class DrizzleModule {}

export type DrizzleDatabase = PostgresJsDatabase<typeof schema>;

export type User = InferModel<typeof schema.user, 'select'>;
export type NewUser = InferModel<typeof schema.user, 'insert'>;

export type Event = InferModel<typeof schema.event, 'select'>;
export type NewEvent = InferModel<typeof schema.event, 'insert'>;

export type Rsvp = InferModel<typeof schema.rsvp, 'select'>;
export type NewRsvp = InferModel<typeof schema.rsvp, 'insert'>;

export type Scancode = InferModel<typeof schema.scancode, 'select'>;
export type NewScancode = InferModel<typeof schema.scancode, 'insert'>;

export type RSVPStatus = NewRsvp['status'];
export type EventTypes = NewEvent['type'];

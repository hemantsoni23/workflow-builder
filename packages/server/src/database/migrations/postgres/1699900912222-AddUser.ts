import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUserTable1699900912222 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
                "id" UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(), 
                "username" TEXT, 
                "email" TEXT UNIQUE NOT NULL, 
                "password" TEXT, 
                "googleId" TEXT UNIQUE, 
                "profilePicture" TEXT, 
                "isGoogleUser" BOOLEAN NOT NULL DEFAULT false, 
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
                "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "user";`)
    }
}

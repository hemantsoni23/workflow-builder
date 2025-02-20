import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUserTable1699900910292 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
                "id" TEXT PRIMARY KEY NOT NULL, 
                "username" TEXT, 
                "email" TEXT UNIQUE NOT NULL, 
                "password" TEXT, 
                "googleId" TEXT UNIQUE, 
                "profilePicture" TEXT, 
                "isGoogleUser" BOOLEAN NOT NULL DEFAULT 0, 
                "createdAt" DATETIME NOT NULL DEFAULT (datetime('now')), 
                "updatedAt" DATETIME NOT NULL DEFAULT (datetime('now'))
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user";`)
    }
}

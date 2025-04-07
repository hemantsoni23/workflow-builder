import { databaseConnection } from './database-connection'
import { databaseSeeds } from './seeds'

export async function initializeDatabase({ runMigrations }: { runMigrations: boolean }) {
    console.log("app/database/index: 1")
    await databaseConnection().initialize()
    console.log("app/database/index: 2")
    if (runMigrations) {
        console.log("app/database/index: 3")
        await databaseConnection().runMigrations()
   console.log("app/database/index: 4")
    }
    await databaseSeeds.run()
}

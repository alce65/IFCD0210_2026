import { connectDB } from "./config/db.ts";
import { prepareTestingDB } from "./config/prepare-testing-db.ts";

const db = await connectDB();
await prepareTestingDB(db);
console.log('Testing database setup completed successfully.');
process.exit(0);

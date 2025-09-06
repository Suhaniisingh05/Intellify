//configure neon connection
import {neon} from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);
//sql can be used to run queries on neon database

export default sql;
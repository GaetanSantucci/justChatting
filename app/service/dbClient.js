import pg from 'pg';

// ~ import debug
import debug from 'debug';
const logger = debug('entrypoint');

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false }
// });

const pool = new pg.Pool();
// const pool = new pg.Pool();

pool.connect()
    .then( () => debug('DB connection is live.'))
    .catch((err) => debug('DB connection failed.', err));

export { pool };
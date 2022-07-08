import { pool } from "../service/dbClient.js";

class WordModel {
    static async check(word) {
        const preparedQuery = {
            text: `SELECT "result" FROM checkWord($1)`,
            values: [word],
        };

        const { rows } = await pool.query(preparedQuery);
        return rows[0].result;
    }
}

export { WordModel };

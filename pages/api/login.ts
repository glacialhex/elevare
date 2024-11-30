import { NextApiRequest, NextApiResponse } from 'next';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const client = await pool.connect();
      const result = await client.query('SELECT token FROM elevare_users WHERE username = $1 AND password = $2', [username, password]);
      client.release();

      if (result.rows.length > 0) {
        res.status(200).json({ id: result.rows[0].id });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Database query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
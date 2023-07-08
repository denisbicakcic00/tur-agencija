
import knex from '../../../database';

export default async function handler(req, res) {
  try {
    const destination = await knex('putovanje')
      .select()
      .from('putovanje')
      .orderByRaw('RAND()')
      .limit(6);

    return res.json({ data: destination });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Greška prilikom dohvata destinacija' });
  }
}
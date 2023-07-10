import knex from '../../../database';

export default async function handler(req, res) {
  const { destinacija } = req.query;

  try {
    const putovanja = await knex('putovanje')
      .select()
      .where('destinacija', 'like', `%${destinacija}%`)
      .orderByRaw('RAND()');

    return res.json({ data: putovanja });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Greška prilikom dohvata putovanja' });
  }
}
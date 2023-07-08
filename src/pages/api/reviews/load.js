import knex from '../../../database';

export default async function handler(req, res) {
  try {
    const review = await knex('recenzije')
      .select('recenzije.*', 'kupac.ime AS ime_kupca')
      .join('kupac', 'recenzije.kupac_id', 'kupac.id')
      .from('recenzije')
      .orderByRaw('RAND()')
      .limit(8);

    return res.json({ data: review });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Greška prilikom dohvata destinacija' });
  }
}
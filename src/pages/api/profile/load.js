import knex from '../../../database';

export default async function handler(req, res) {
  try {

    const {id} = req.query;

    const user = await knex('kupac')
      .select()
      .from('kupac')
      .where('id', id)
      .first()

      const putovanja = await knex('karta')
      .select('putovanje.*')
      .from('karta')
      .join('putovanje', 'putovanje.id', '=', 'karta.putovanje_id')
      .where('karta.kupac_id', id);

      const data = {
        user,
        putovanja
      }

    return res.json({ data});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Greška prilikom dohvata korisnika' });
  }
}

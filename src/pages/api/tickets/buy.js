import knex from '../../../database';

export default async function handler(req, res) {
  const data = req.body;

  try {
    const karta = await knex('karta').insert(
      {
         kupac_id: 1, // Postavite odgovarajuću vrijednost za kupca
         putovanje_id: data.putovanje_id, // Dodajte putovanje_id iz req.body
         broj_karata: data.broj_karata,
         broj_kartice: data.broj_kartice,
         datum_valjanosti: data.datum_valjanosti,
         cvc: data.cvc,
         ukupna_cijena: data.ukupna_cijena
       },
       ['id', 'broj_karata', 'broj_kartice', 'datum_valjanosti', 'cvc']
     );
    res.status(200).json({ status: 200, message: 'Karte uspješno kupljene' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Greška prilikom kupovine karata' });
  }
}

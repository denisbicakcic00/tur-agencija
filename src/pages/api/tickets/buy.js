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

     
    const putovanjeId = data.putovanje_id;
    const kupacId = 1; // Postavite odgovarajuću vrijednost za kupca

    const putovanje = await knex('putovanje')
      .select('bodovi')
      .where('id', '=', putovanjeId)
      .first();

    const bodovi = putovanje.bodovi;

    const kupac = await knex('kupac')
      .select('bodovi')
      .where('id', '=', kupacId)
      .first();

    const trenutniBodovi = kupac.bodovi;
    const ukupniBodovi = bodovi + trenutniBodovi;

    await knex('kupac')
      .where('id', '=', kupacId)
      .update('bodovi', ukupniBodovi);
    res.status(200).json({ status: 200, message: 'Karte uspješno kupljene' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Greška prilikom kupovine karata' });
  }
}

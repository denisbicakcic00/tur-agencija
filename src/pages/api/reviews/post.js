import knex from '../../../database';

export default async function handler(req, res) {
 const data = req.body

 try {
    const recenzije = await knex('recenzije').insert({
    kupac_id: 1,
    ocjena: data.ocjena,
    komentar: data.komentar
 } , ['id', 'ocjena','komentar']
 )
 res.status(200).json({status:200, message: 'Recenzija uspjesno napisana!'});
} catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Greška prilikom upisa recenzije' });
  }
}
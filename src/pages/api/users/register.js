import knex from '../../../database';

export default async function handler(req, res) {
 const data = req.body
 let kupac = await knex('kupac').where({
    email: data.email
 })

 if (!!kupac.length){
   return res.status(500).json({status:500, message:'Korisnik vec postoji'})
 }
 kupac = await knex('kupac').insert({
    ime: data.ime,
    prezime: data.prezime,
    email: data.email,
    password: data.password
 } , ['id', 'ime','prezime', 'email', 'password']
 )
 res.status(200).json({status:200, message: 'Profil uspjesno kreiran!'});
}
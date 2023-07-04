// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from '../../database';

export default async function handler(req, res) {

 const karta = await knex.select().table('karta')
  res.status(200).json(karta)

 const kupac = await knex.select().table('kupac')
 res.status(200).json(kupac)

 const putovanje = await knex.select().table('putovanje')
 res.status(200).json(putovanje)
}

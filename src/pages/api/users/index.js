import knex from '../../../database';

export default async function handler(req, res) {

 const kupac = await knex.select().table('kupac')
 res.status(200).json(kupac)
}
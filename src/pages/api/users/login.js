import knex from '../../../database';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export default async function handler(req, res) {
  const data = req.body;
  let kupac = await knex('kupac').where('email', data.email);

  if (kupac.length === 0) {
    return res.status(500).json({ status: 500, message: 'Korisnik nije pronađen, registrujte se!' });
  }

  const isPasswordMatch = await compare(data.password, kupac[0].password);

  if (!isPasswordMatch) {
    return res.status(500).json({ status: 500, message: 'Provjerite da li ste ispravno upisali lozinku!' });
  }

  const token = sign({ userId: kupac[0].id }, 'tajni_kljuc', { expiresIn: '7d' });

  res.status(200).json({ status: 200, message: 'Uspješno prijavljeni', token });
}
